import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  selectedFile?: File;
  fb?: any;
  downloadURL?: Observable<string>;
  images: any[] = [];

  constructor(private authService: AuthService, private firestore: AngularFirestore, private storage: AngularFireStorage, public router: Router, private toastr: ToastrService, private firebaseAuth: AngularFireAuth) {
    this.firebaseAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigateByUrl('/login');
      }
    })

  }

  ngOnInit(): void {
    this.firestore
      .collection("images")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.images.push(doc.data());
          console.log(this.images);
        });
      });
  }

  save(event: any): void {

    var selectedFiles = event.target.files;

    for (var i = 0; i < selectedFiles.length; i++) {

      var n = Date.now();
      const filePath = `InteriorImages/${n}`;
      const fileRef = this.storage.ref(filePath);
      const file = selectedFiles[i];
      const task = this.storage.upload(`InteriorImages/${n}`, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.fb = url;
                //post image inside the db
                this.firestore.collection('images').add({
                  timestamp: Date.now(),
                  imageUrl: url,
                })
              }
            });
          })
        )
        .subscribe(url => {
          if (url) {
            console.log("Hey" + url);
          }
        });
    }


  }


  public signOut: any = () => {
    this.authService.logout()
  }

}
