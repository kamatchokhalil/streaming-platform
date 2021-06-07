import { Injectable } from '@angular/core';
import {User} from '../model/User';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  addUser(user: User){
    return this.http.post(this.url, user);
  }

  auth(username: string, password: string){
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    return this.http.get(this.url, {params: params});
  }
}
