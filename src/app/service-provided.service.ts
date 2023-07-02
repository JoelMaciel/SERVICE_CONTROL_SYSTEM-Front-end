import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceProvided } from './service-provided/serviceProvided';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceProvidedService {
  apiURL: string = environment.apiBaseURL + '/api/services-provided';
  constructor(private http: HttpClient) {}

  save(serviceProvided: ServiceProvided): Observable<ServiceProvided> {
    return this.http.post<ServiceProvided>(this.apiURL, serviceProvided);
  }
}
