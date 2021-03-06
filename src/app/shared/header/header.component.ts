import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from "@angular/router";
// import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from './../../services/data.service';
import { Details } from './../../Models/details'
import { Observable } from 'rxjs';
import { Quote } from './../../Models/quote';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public route_id: any = '';
  public bhk='';
  public area?:number;
  public type='';
  bhkBtnClick = false;
  typeBtnClick = false;
  btnStatus1 = false;
  btnStatus2 = false;
  btnStatus3 = false;
  btnTypeStatus1 = false;
  btnTypeStatus2 = false;
  disableQuoteButton = true;
  mobile:any;

  public quote?: Observable<Quote>;
  public detail?: Observable<Details>;
  priceInfo:any;

  public name?: string;
  public email?: string;
  public text?: string;

  constructor(private _route: ActivatedRoute, public router: Router, private toastr: ToastrService, private dataService: DataService) { }

  ngOnInit(): void {
    // this._route.data.subscribe(x => {
    //   this.route_id=x.active;
    // });
    //console.log(this.route_id);
    if (this.bhk && this.area && this.type) {
      this.disableQuoteButton = false;
    }

  }


  addBhk(val: any) {
    if (this.bhkBtnClick == false) {
      this.bhk = val;
      this.bhkBtnClick = true;
      if (val == '1 BHK') {
        this.btnStatus2 = true;
        this.btnStatus3 = true;
        document.getElementById('btn1')?.classList.remove('bhk');
        document.getElementById('btn1')?.classList.add('addedBhk');
      }
      else if (val == '2 BHK') {
        this.btnStatus1 = true;
        this.btnStatus3 = true;
        document.getElementById('btn2')?.classList.remove('bhk');
        document.getElementById('btn2')?.classList.add('addedBhk');
      }
      else if (val == '3 BHK') {
        this.btnStatus1 = true;
        this.btnStatus2 = true;
        document.getElementById('btn3')?.classList.remove('bhk');
        document.getElementById('btn3')?.classList.add('addedBhk');
      }
    }
    else {
      this.bhkBtnClick = false;
      this.btnStatus1 = false;
      this.btnStatus2 = false;
      this.btnStatus3 = false;
      document.getElementById('btn1')?.classList.remove('addedBhk');
      document.getElementById('btn1')?.classList.add('bhk');
      document.getElementById('btn2')?.classList.remove('addedBhk');
      document.getElementById('btn2')?.classList.add('bhk');
      document.getElementById('btn3')?.classList.remove('addedBhk');
      document.getElementById('btn3')?.classList.add('bhk');

    }

  }

  addHomeType(val: any) {
    if (this.typeBtnClick == false) {
      this.typeBtnClick = true;
      this.type = val;
      if (val == 'New') {
        this.btnTypeStatus2 = true;
        document.getElementById('newh')?.classList.remove('type');
        document.getElementById('newh')?.classList.add('addedBhk');
      }
      else if (val == 'Renovate') {
        this.btnTypeStatus1 = true;
        document.getElementById('revh')?.classList.remove('type');
        document.getElementById('revh')?.classList.add('addedBhk');
      }
    }
    else {
      this.typeBtnClick = false;
      this.btnTypeStatus1 = false;
      this.btnTypeStatus2 = false;
      document.getElementById('revh')?.classList.remove('addedBhk');
      document.getElementById('revh')?.classList.add('type');
      document.getElementById('newh')?.classList.remove('addedBhk');
      document.getElementById('newh')?.classList.add('type');
    }

  }



  saveDetails() {

    let detail = {
      name: this.name,
      email: this.email,
      text: this.text
    }
    
    this.dataService.postDetails(detail);

    
    emailjs.send("service_rsinteriors","template_7vd78rb",{
      message: detail.text,
      name: detail.name,
      email: detail.email,
      },"user_gp55zyXsSQMxOKGvef1Fl")
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });

    


    this.toastr.success("We'll Reach Out To You Shortly!", "Thankyou !");

    (document.getElementById('name')as HTMLInputElement).value='';
    (document.getElementById('email')as HTMLInputElement).value='';
    (document.getElementById('message')as HTMLInputElement).value=''

  }

  saveQuote() {

    let quote = {
      bhk: this.bhk,
      area: this.area,
      type: this.type,
      email:this.email,
      mobile:this.mobile
    }

    if(quote.bhk=='1 BHK') {
      this.priceInfo = `For 1 BHK Designing: 7500, 
                        FALSE CEILING - 3000, 
                        Total Price - 10500 Rs/-
                        (Pooja Complementary)` ;
    }
    else if (quote.bhk=='2 BHK') {
      this.priceInfo = `For 2 BHK Designing: 10000, 
      FALSE CEILING - 4000, 
      Total Price - 14000 Rs/- 
      (Pooja Complementary)` ;
    }
    else {
      this.priceInfo = `For 3 BHK Designing: 12500, 
      FALSE CEILING - 4000, 
      Total Price - 16500 Rs/- 
      (Pooja Complementary & Discount of Rupees 1000)` ;
    }

    this.dataService.postQuote(quote);

    emailjs.send("service_rsinteriors","template_gar58l5",{
      name: quote.email?.split("@")[0],
      custEmail: quote.email,
      mobile: quote.mobile,
      houseDetails: `BHK-${quote.bhk}, Area-${quote.area} sq.ft, Type- ${quote.type}`,
      totalPrice: this.priceInfo
      },"user_gp55zyXsSQMxOKGvef1Fl")
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
         console.log('FAILED...', err);
      });

    this.toastr.success("We'll Reach Out To You Shortly!", "Thankyou !");
    setTimeout(function(){
      location.reload();
    },3000)
          //this.router.navigateByUrl('/about');

  }
}
