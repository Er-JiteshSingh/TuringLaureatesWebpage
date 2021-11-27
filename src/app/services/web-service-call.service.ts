import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebServiceCallService {

  private baseUrl: String = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getAllAwardeesData() {
    return this.http.get(`${this.baseUrl}/awardees`)
  }
}
