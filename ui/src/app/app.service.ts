import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  getContacts() {
    return this.http.get(this.rootURL + '/contacts');
  }

  getAddresses() {
    return this.http.get(this.rootURL + '/addresses');
  }
}
