import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherHttpService {

  constructor(private _http:Http) { }

  public getCityWeatherForcast(cityName:string){
    let _url:string='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+ cityName +'%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    return this._http.get(_url);
  }

}
