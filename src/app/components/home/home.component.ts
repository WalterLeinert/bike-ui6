import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

import { BikeService } from '../../services/bike.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo Carbon Fiber Race Series',
    'Globo Time Trial Blade'
  ];

  public bikeform: FormGroup;
  public validMessage = '';

  constructor(private service: BikeService) { }

  ngOnInit() {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  public submitRegistration() {
    if (this.bikeform.valid) {
      this.validMessage = 'Your bike registration has been submitted. Thank you!';
      this.service.create(this.bikeform.value).subscribe(
        (data) => {
          this.bikeform.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );

    } else {
      this.validMessage = 'Please fill out the form before submitting!';
    }
  }

}
