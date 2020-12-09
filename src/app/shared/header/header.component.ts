import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public route_id: any='';
  public bhk='';
  public area='';
  public type='';
  bhkBtnClick=false;
  typeBtnClick=false;
  btnStatus1=false;
  btnStatus2=false;
  btnStatus3=false;
  btnTypeStatus1=false;
  btnTypeStatus2=false;
  disableQuoteButton=true;


  constructor(private _route: ActivatedRoute, public router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this._route.data.subscribe(x => {
      this.route_id=x.active;
    });
    //console.log(this.route_id);
    if(this.bhk && this.area && this.type){
      this.disableQuoteButton=false;
    }

  }

  addBhk(val:any){
    if (this.bhkBtnClick==false) {
          this.bhk=val;
          this.bhkBtnClick=true;
          if (val==1){
            this.btnStatus2=true;
            this.btnStatus3=true;
            document.getElementById('btn1')?.classList.remove('bhk');
            document.getElementById('btn1')?.classList.add('addedBhk');
          }
          else if(val==2){
            this.btnStatus1=true;
            this.btnStatus3=true;
            document.getElementById('btn2')?.classList.remove('bhk');
            document.getElementById('btn2')?.classList.add('addedBhk');
          }
          else if(val==3){
            this.btnStatus1=true;
            this.btnStatus2=true;
            document.getElementById('btn3')?.classList.remove('bhk');
            document.getElementById('btn3')?.classList.add('addedBhk');
          }
    }
    else {
      this.bhkBtnClick=false;
      this.btnStatus1=false;
      this.btnStatus2=false;
      this.btnStatus3=false;
      document.getElementById('btn1')?.classList.remove('addedBhk');
      document.getElementById('btn1')?.classList.add('bhk');
      document.getElementById('btn2')?.classList.remove('addedBhk');
      document.getElementById('btn2')?.classList.add('bhk');
      document.getElementById('btn3')?.classList.remove('addedBhk');
      document.getElementById('btn3')?.classList.add('bhk');

    }
    
  }

  addHomeType(val:any){
    if(this.typeBtnClick==false)
    {
      this.typeBtnClick=true;
        this.type=val;
        if(val=='new'){
          this.btnTypeStatus2=true;
          document.getElementById('newh')?.classList.remove('type');
          document.getElementById('newh')?.classList.add('addedBhk');
        }
        else if(val=='renovate'){
          this.btnTypeStatus1=true;
          document.getElementById('revh')?.classList.remove('type');
          document.getElementById('revh')?.classList.add('addedBhk');
        }
    }
    else {
      this.typeBtnClick=false;
      this.btnTypeStatus1=false;
      this.btnTypeStatus2=false;
      document.getElementById('revh')?.classList.remove('addedBhk');
      document.getElementById('revh')?.classList.add('type');
      document.getElementById('newh')?.classList.remove('addedBhk');
      document.getElementById('newh')?.classList.add('type');
    }
    
  }
  sendQuote(){
    //console.log(this.bhk);
    //console.log(this.type);
    this.area=(document.getElementById('area')as HTMLInputElement).value;
    //console.log(this.area);
    //this.router.navigateByUrl('/about');
      console.log(true)
      this.toastr.success("We'll Reach Out To You Shortly!", "Thankyou !");
        setTimeout(function(){
          location.reload();
        },5000);    
  }

}
