import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
 
  title = "cloudsSorage";
  selectedFile?: File ;
  fb?:any;
  downloadURL?: Observable<string>;

  constructor(private authService: AuthService, private storage: AngularFireStorage, public router: Router, private toastr: ToastrService, private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigateByUrl('/login');
      }
    })

  }

  ngOnInit(): void {
  }


  onFileSelected(event: { target: { files: any[]; }; }) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  public signOut: any = () => {

    this.authService.logout()

  }
}
