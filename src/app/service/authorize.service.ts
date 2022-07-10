import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http: HttpClient) { }
  
  login(email:string, password:string ) {
    return this.http.post<LUser>('/api/login', {email, password})
        // this is just the HTTP call, 
        // we still need to handle the reception of the token
  // .shareReplay();




}
}