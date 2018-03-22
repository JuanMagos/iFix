import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {

  constructor(private http: Http) { }
  BASE_URL = 'http://localhost:3000/user';

  signUp(user) {
    console.log(this.BASE_URL);
    return this.http.post(`${this.BASE_URL}/signup`, user)
    .map(res => res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e);
    });
  }

  login(user) {
    console.log("user")
  return this.http.post(`${this.BASE_URL}/login`, user, {withCredentials: true})
  .map(res => res.json())
  .map(users => {
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  })
  .catch(e => {
    return Observable.throw(e);
});
}
}
