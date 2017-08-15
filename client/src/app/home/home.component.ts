import * as firebase from "firebase";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../app/services";
import {Blog} from "../admin/adminShared/blog";

@Component({
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]    
})
export class HomeComponent implements OnInit {
    blogPosts: Blog[];

    constructor(private userService: UserService, private router: Router){} 

    ngOnInit(){
        //this.getPosts();
    }

    getPosts(){
        // let dbRef = firebase.database().ref("blogPosts/")
        // dbRef.once("value")
        //     .then((snapshot)=> {
        //         let tmp: string[] = snapshot.val();
        //         this.blogPosts = Object.keys(tmp).map(key => tmp[key])
        //     });
    }

    choosePost(post: Blog) {
        //this.router.navigate(["/post", post.id]);
    }   

}
