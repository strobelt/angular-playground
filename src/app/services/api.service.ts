import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  getUrl(path: string) {
    return `${environment.apiUrl}/${path}`;
  }
}
