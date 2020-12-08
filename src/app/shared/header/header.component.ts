import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public route_id: any='';


  constructor(private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._route.data.subscribe(x => {
      this.route_id=x.active
    });
    console.log(typeof(this.route_id));
  }

}
