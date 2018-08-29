import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class CountrisService {

  constructor(private _http:Http) { }

  public getCountryDetail(countryname:string){
    let url:string='https://restcountries.eu/rest/v2/name/'+countryname+'?fullText=true';
    return this._http.get(url);
  } 

  public getAllCountry(){
    let url:string='https://restcountries.eu/rest/v2/all';
    return this._http.get(url);
  } 
}
