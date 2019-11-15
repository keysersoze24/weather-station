import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  constructor(private http: HttpClient) { }

  public getWheaterInfo(): any {
    return this.http.get<any>(URL);
  }
}

const API_KEY = '65bf75f07712c3443a332621cd9c5aca';
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Lucca&lang=it&units=metric&APPID=' + API_KEY;
