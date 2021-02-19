import { Component, OnInit } from '@angular/core';
import firebase from "firebase";
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title="OneFlashApp";
  provider:any;
  user:any;

  constructor(private router: Router){

  }
  ngOnInit(): void {
    let route:any
    this.router = route
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });
  }

  logout(){
    firebase.auth().signOut().then(function() {
     console.log("sign out");
     
    }).catch(function(error) {
      console.log(error)
    });
  }
 
 
  loginWithGmail() {
    let route:any
    this.router = route
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
     var user = result.user;
     console.log(user);
     console.log('connect')
      route.navigate(['/user'])
    }).catch(function(error) {
    });
  }  

}
