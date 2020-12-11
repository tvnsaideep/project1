import { Injectable, Input } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user?: firebase.default.User;

  constructor(private firebaseAuth: AngularFireAuth,public router:Router) {
    this.firebaseAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;
      } else {

      }
    })
  }


  login(cred: { email: any; password: any; }) {
    this.firebaseAuth
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout(){
    this.firebaseAuth.signOut();
    this.router.navigate(['/login']);
  }
}
