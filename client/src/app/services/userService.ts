import * as firebase from "firebase";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../../app/models";

@Injectable()
export class UserService implements CanActivate {
    // private static _instance: UserService = new UserService();

    // public static get instance(): UserService {
    //     return UserService._instance;
    // }

    public userLoggedIn: boolean = false;
    public loggedInUser: string;
    public authUser: any;

    constructor(private router: Router) {
        // if (UserService._instance) {
        //     throw new Error("Instantiation error");
        // }
        
        firebase.initializeApp({
            apiKey: "AIzaSyAs2AuhW-7iHA_TWpaI6QXDGE_SMC1maGM",
            authDomain: "glr-games-cribbage.firebaseapp.com",
            databaseURL: "https://glr-games-cribbage.firebaseio.com",
            projectId: "glr-games-cribbage",
            storageBucket: "glr-games-cribbage.appspot.com",
            messagingSenderId: "45457712104"
        });
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.verifyLogin(url);
    }
    public verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }

        this.router.navigate(["/admin/login"]);
        return false;
    }
    public register(username: string, email: string, password: string): Promise<User> {
        return new Promise((resolve, reject) => {
            firebase.database().ref().child("users").orderByChild("username").equalTo(username)
                .on("value", (snapshot) => {
                    if (snapshot.val() !== null){
                        return reject(JSON.stringify(snapshot.val()));//return reject(new Error(`Username '${username}' already exists.`));
                    } else {
                        firebase.database().ref().child("users").orderByChild("username").equalTo(username)
                            .once("value", (snapshot) => {
                                return reject(new Error(`Username '${username}' already exists.`));
                            }, () => {
                                firebase.auth().createUserWithEmailAndPassword(email, password)
                                    .then((data: firebase.User) => {
                                        let user: User = new User(data.uid, username);
                                        firebase.database().ref().child("users").child(data.uid).set(user)
                                            .then(() => {
                                                return resolve(user);
                                            })
                                            .catch((error) => {
                                                alert(error);
                                                return reject(error);
                                            });
                                    })
                                    .catch((error) => {
                                        alert(error);
                                        return reject(error);
                                    });
                            });
                    }
                });
        });
    }
    public verifyUser(user?: User) {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {
            this.loggedInUser = user ? user.username : this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(["/admin"]);
        }
    }
    public login(loginEmail: string, loginPassword: string): Promise<User> {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
                .then((u: firebase.User) => {
                    firebase.database().ref().child("users").child(u.uid)
                        .on("value", (snapshot) => {
                            return resolve(<User>snapshot.val());
                        });
                })
                .catch((error) => {
                    return reject(error);
                });
        });
    }
    public logout(){
        this.userLoggedIn = false;
        firebase.auth().signOut().then(() => {
            alert(`Logged Out!`);
        }, (error) => {
            alert(`${error.message} Unable to logout. Try again!`);
        });
    }
}
