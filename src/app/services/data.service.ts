import { Injectable } from '@angular/core';
import { Details } from './../Models/details'
import { Quote } from './../Models/quote'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }


  postDetails(detail: Details) {
    return this.firestore.collection('details').add(detail);
  }


  postQuote(quote: Quote) {
    return this.firestore.collection('quote').add(quote);
  }

}
