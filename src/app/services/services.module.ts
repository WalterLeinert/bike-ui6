import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BikeService } from './bike.service';

@NgModule({
    providers: [BikeService]
})
export class ServicesModule {
}
