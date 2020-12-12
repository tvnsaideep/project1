import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [];

  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection("images")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.images.push(doc.data());
          console.log(this.images[0].imageUrl);
        });
      });
  }

  callFunction(){
    console.log("Test");
  }

}
