import * as firebase from "firebase";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../app/services";
import {Blog} from "../admin/adminShared/blog";
import {Card} from "../models";

@Component({
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    blogPosts: Blog[];
    cards: { 
        clubs: Array<Card>,
        diamonds: Array<Card>,
        hearts: Array<Card>,
        spades: Array<Card>
    };

    constructor(private userService: UserService, private router: Router){} 

    ngOnInit(){
        //this.getPosts();
        this.getCards();
    }

    getCards(): void{
        this.cards = {
            clubs: [Card.AceOfClubs, Card.TwoOfClubs, Card.ThreeOfClubs, Card.FourOfClubs, Card.FiveOfClubs, Card.SixOfClubs, Card.SevenOfClubs, Card.EightOfClubs, Card.NineOfClubs, Card.TenOfClubs, Card.JackOfClubs, Card.QueenOfClubs, Card.KingOfClubs],
            diamonds: [Card.AceOfDiamonds, Card.TwoOfDiamonds, Card.ThreeOfDiamonds, Card.FourOfDiamonds, Card.FiveOfDiamonds, Card.SixOfDiamonds, Card.SevenOfDiamonds, Card.EightOfDiamonds, Card.NineOfDiamonds, Card.TenOfDiamonds, Card.JackOfDiamonds, Card.QueenOfDiamonds, Card.KingOfDiamonds],
            hearts: [Card.AceOfHearts, Card.TwoOfHearts, Card.ThreeOfHearts, Card.FourOfHearts, Card.FiveOfHearts, Card.SixOfHearts, Card.SevenOfHearts, Card.EightOfHearts, Card.NineOfHearts, Card.TenOfHearts, Card.JackOfHearts, Card.QueenOfHearts, Card.KingOfHearts],
            spades: [Card.AceOfSpades, Card.TwoOfSpades, Card.ThreeOfSpades, Card.FourOfSpades, Card.FiveOfSpades, Card.SixOfSpades, Card.SevenOfSpades, Card.EightOfSpades, Card.NineOfSpades, Card.TenOfSpades, Card.JackOfSpades, Card.QueenOfSpades, Card.KingOfSpades]
        }   
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
