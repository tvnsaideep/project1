import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [];
  imageUrls:any[]=[];

  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
    this.firestore
      .collection("images")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.images.push(doc.data());
       // console.log(this.images);
        });
        this.images.map(x => this.imageUrls.push({image:x.imageUrl,thumbImage:x.imageUrl}))
        //console.log(this.imageUrls)
      });

      ;

     
      
  }

  callFunction(){
    console.log("Test");
  }

}
