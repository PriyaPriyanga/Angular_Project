import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  customer_Profile = {name:"Claudia Mills",position:"Customer",channels:"CHAT",email:"Claudia@sensiple.com",phone:"+91 91760 12345",
  routedQueue:"Application Support",queueWaitTime:"00:17"};

  constructor() { }

  ngOnInit() {
  }


}
