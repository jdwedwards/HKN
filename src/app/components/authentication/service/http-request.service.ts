import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  private apiUrl = 'https://new.hardknocknews.tv/api';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData )
    
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
