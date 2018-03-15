import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {

  constructor(private http: Http) { }
  BASE_URL = 'http://localhost:3000/api/auth';

  signUp(user) {
    return this.http.post(`${this.BASE_URL}/signup`, user)
    .map(res => res.json())
    .catch(e => {
      alert(JSON.parse(e._body).message);
      return Observable.throw(e);
    });
  }
}
