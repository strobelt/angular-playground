import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherForecast } from '../weather/weather-forecast.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService extends ApiService {
  private url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = this.getUrl('WeatherForecast');
  }

  get() {
    return this.http.get<WeatherForecast[]>(this.url);
  }
}
