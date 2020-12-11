import { Injectable, Input } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user?: firebase.default.User;

  constructor(private firebaseAuth: AngularFireAuth,public router:Router,private toastr:ToastrService) {
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
        this.toastr.success("Logged In!")
      })
      .catch(err => {
        this.toastr.warning("Incorrect Auth Details !","Failed !")
      });
  }

  logout(){
    this.firebaseAuth.signOut();
    this.router.navigate(['/login']);
  }
}
