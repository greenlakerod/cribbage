import * as firebase from "firebase";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {User} from "../../app/models";

@Injectable()
export class UserService implements CanActivate {
    private static _instance: UserService = new UserService();

    public static get instance(): UserService {
        return UserService._instance;
    }

    public router: Router;
    public userLoggedIn: boolean = false;
    public loggedInUser: string;
    public authUser: any;

    constructor() {
        if (UserService._instance) {
            throw new Error("Instantiation error");
        }
        
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
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((data: firebase.User) => {
                    let user: User = new User(data.uid, username);
                    firebase.database().ref().child("users").child(data.uid).set(user)
                    .then(() => {
                        return resolve(user);
                    })
                    .catch((error) => {
                        return reject(error);
                    });
                })
                .catch((error) => {
                    return reject(error);
                });
        });
    }
    public verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {

            alert(`Welcome ${this.authUser.email}`);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(["/admin"]);
        }
    }
    public login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch(function(error) {
                alert(`${error.message} Unable to login. Try again!`);
        });
    }
    public logout(){
        this.userLoggedIn = false;
        firebase.auth().signOut().then(function() {
            alert(`Logged Out!`);

        }, function(error) {
            alert(`${error.message} Unable to logout. Try again!`);
        });
    }
}
