import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public name?: string;
  public email?: string;
  public text?: string;


  constructor(private _route: ActivatedRoute, public router: Router, private toastr: ToastrService, private dataService: DataService) { }

  ngOnInit(): void {
    
  }
 // title = 'My first AGM project';
  //lat = 51.678418;
  //lng = 7.809007;
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

}
