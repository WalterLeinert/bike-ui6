import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Globomatics Bike Registry System';

  constructor(private authService: AuthService) {
    authService.handleAuthentication();
  }
}
