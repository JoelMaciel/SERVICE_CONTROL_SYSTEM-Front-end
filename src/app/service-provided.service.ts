import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceProvided } from './service-provided/serviceProvided';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceProvidedSearch } from './service-provided/service-provided-list/serviceProvidedList';

@Injectable({
  providedIn: 'root',
})
export class ServiceProvidedService {
  apiURL: string = environment.apiBaseURL + '/api/services-provided';
  constructor(private http: HttpClient) {}

  save(serviceProvided: ServiceProvided): Observable<ServiceProvided> {
    return this.http.post<ServiceProvided>(this.apiURL, serviceProvided);
  }

  search(name: string, month: number): Observable<ServiceProvidedSearch[]> {
    const httpParams = new HttpParams()
      .set('name', name)
      .set('month', month ? month.toString() : '');

    const url = this.apiURL + '?' + httpParams;
    return this.http.get<any>(url);
  }
}
