import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherStatus, Utilities, ICON_BASE_PATH, ICON_TYPE } from './models/WheaterStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherStatus: WeatherStatus;
  iconUrl: string;
  time = new Date();
  date: string;
  hour: string;

  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit() {
    this.weatherApi.getWheaterInfo().subscribe(raw => {
      this.weatherStatus = Utilities.rawToWeatherStatusWrapper(raw);
      this.iconUrl = ICON_BASE_PATH + this.weatherStatus.icon + ICON_TYPE;
      console.log(this.weatherStatus);
    });
    setInterval(() => {
      this.time = new Date();
      this.date = this.time.toLocaleDateString();
      this.hour = this.time.toLocaleTimeString();
   }, 1000);
  }
}
