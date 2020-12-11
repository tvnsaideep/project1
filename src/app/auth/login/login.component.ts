import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email?: string;
  public password?: string;
  public cred?: {
    email?: string,
    password?: string
  }

  constructor(private authService: AuthService, public router: Router,
    private toastr: ToastrService, private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/addImages');
      } else {

      }
    })

  }

  ngOnInit(): void {
  }




  public signIn: any = () => {

    if (!this.email) {
      this.toastr.warning('enter email')
    } else if (!this.password) {
      this.toastr.warning('enter password')
    } else {

      let cred = {
        email: this.email,
        password: this.password
      }

      this.authService.login(cred)

    } // end signinFunction

  }
}
