import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebServiceCallService {
  private baseUrl: String = 'https://veca.herokuapp.com';

  constructor(private http: HttpClient) {}

  // Read All Laureates
  getAllAwardeesData() {
    return this.http.get(`${this.baseUrl}/awardees`);
  }

  // Save New Laureates
  addAwardee(awardee: any) {
    return this.http.post(`${this.baseUrl}/awardee`, awardee);
  }
}
