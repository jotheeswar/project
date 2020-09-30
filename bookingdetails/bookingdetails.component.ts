import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {

  ticketid:string;
  flightnumber;
  source;
  destination;
  departure;
  arrival;
  bookings=[];
  constructor() { }

  ngOnInit(): void {
  }

}
