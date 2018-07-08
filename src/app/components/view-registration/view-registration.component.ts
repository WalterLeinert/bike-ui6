import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Bike } from '../../models/bike.model';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bike: Bike;

  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBike(this.route.snapshot.params.id);
  }

  public getBike(id: number) {
    this.bikeService.findById(id).subscribe(
      (data) => this.bike = data,

      error => console.error(error),
      () => console.log('bike loaded')
    );
  }

}
