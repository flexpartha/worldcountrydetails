import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CountrisService } from './countryservice/countris.service';
import { HttpModule } from '@angular/http';
import { WeatherHttpService } from './weather-service/weather.http.service';
import { LoadingSpinnerComponent } from './loader-spinner/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [CountrisService, WeatherHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
