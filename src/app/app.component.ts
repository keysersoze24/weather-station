import { Component } from '@angular/core';
import { WeatherApiService } from './services/weather-api.service';
import { WeatherStatus, Utilities } from './models/WheaterStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherStatus: WeatherStatus;

  constructor(private weatherApi: WeatherApiService) { }

  ngOnInit() {
    this.weatherApi.getWheaterInfo().subscribe(raw => {
      this.weatherStatus = Utilities.rawToWeatherStatusWrapper(raw);
      console.log(this.weatherStatus);
    });
  }
}
