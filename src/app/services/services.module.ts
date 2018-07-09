import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { BikeService } from './bike.service';

@NgModule({
    providers: [
        AuthService,
        BikeService
    ]
})
export class ServicesModule {
}
