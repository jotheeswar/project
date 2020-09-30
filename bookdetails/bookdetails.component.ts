import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  homeimg="assets/images/home.png";
  mobileimg="assets/images/mobile.png";
  personimg="assets/images/person.png";
}
