import { Component, OnInit } from '@angular/core';

import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public bikes;

  constructor(private service: BikeService) { }

  ngOnInit() {
    this.getBikes();
  }

  public getBikes() {
    return this.service.find().subscribe(
      data => { this.bikes = data; },
      err => console.log(err),
      () => console.log('bikes loaded')
    );
  }

}
