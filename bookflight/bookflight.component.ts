import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  count=['one','two','three'];
  constructor() { }

  ngOnInit(): void {
  }

}
