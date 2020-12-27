import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { WeatherForecast } from './weather-forecast.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  weatherForecast$: Observable<WeatherForecast[]>;

  constructor(service: WeatherService) {
    this.weatherForecast$ = service.get();
  }
}
