import { Component, OnInit } from '@angular/core';
import firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title="OneFlashApp";
  provider:any;
  user:any;

  constructor(){

  }
  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
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
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
     var user = result.user;
     console.log(user);
    }).catch(function(error) {
     
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }  
}