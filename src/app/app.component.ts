import { Component,OnInit } from '@angular/core';
import { CountrisService } from './countryservice/countris.service';
import { WeatherHttpService } from './weather-service/weather.http.service';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Multiple Service Call DEMO';

  public showSpinner:boolean=false;

  public tableHeading='';

  public cityDetails:any={
    humidity:0,
    pressure:0,
    sunrise:'',
    sunset:'',
    country:'',
    city:''
  };

  public cityResult:any={
    country:'',
    city:''
  }

  public weatherResult:any={
    pressure:0,
    humidity:0,
    description:''
  }
  private setWeatherData(weatherData:any):void
  {
    this.tableHeading=weatherData.query.results.channel.title;
    this.cityDetails.humidity=weatherData.query.results.channel.atmosphere.humidity;
    this.cityDetails.pressure=weatherData.query.results.channel.atmosphere.pressure;
    this.cityDetails.sunrise=weatherData.query.results.channel.astronomy.sunrise;
    this.cityDetails.sunset=weatherData.query.results.channel.astronomy.sunset;
    this.cityDetails.country=weatherData.query.results.channel.location.country;
    this.cityDetails.city=weatherData.query.results.channel.location.city;
    this.showSpinner=false;
  }
  //public countryObj:any;

  public countryName:string;

  public cityName:string;
  public countryList:any;
  constructor(private contryService:CountrisService,
    private weatherservice:WeatherHttpService){}
  // public getCountryInfo(){
  //   this.contryService.getCountryDetail(this.countryName).subscribe(res=>this.countryObj=res.json()[0]);
  // }

  public getForcast():void
  {
    this.showSpinner=true;
    this.contryService.getCountryDetail(this.countryName)
      .map(res=>res.json())
      .subscribe(country=>this.weatherservice.getCityWeatherForcast(country[0].capital)
      .subscribe(details=>this.setWeatherData(details.json()))
    );
    // this.contryService.getCountryDetail(this.countryName)
    // .subscribe(()=>this.showSpinner=false);
  }

  public getCityDetails():void
  {
    let capitalCityDetail=this.contryService.getCountryDetail(this.countryName).map(res=>res.json());
    let weatherDetail=this.weatherservice.getCityWeatherForcast(this.cityName).map(res=>res.json());

        Observable.forkJoin([capitalCityDetail,weatherDetail]).subscribe(result=>{
        this.setWeatherData1(result[0],result[1]);
    });
  }

  private setWeatherData1(cityData:any,weatherData:any):void
  {
    this.cityResult.country=cityData[0].name,
    this.cityResult.city=cityData[0].capital,
    this.weatherResult.humidity=weatherData.query.results.channel.atmosphere.humidity;
    this.weatherResult.pressure=weatherData.query.results.channel.atmosphere.pressure;
    this.weatherResult.description=weatherData.query.results.channel.atmosphere.description;
  }
  ngOnInit(){
    this.contryService.getAllCountry().subscribe(res=>this.countryList=res.json());
  }
}
