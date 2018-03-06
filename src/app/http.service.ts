import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, CheckUser, UserDetails } from './User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  // URL to web api
  private baseUrl = 'http://localhost:9090';
  private usersUrl = this.baseUrl + '/users';
  private loginUrl = this.baseUrl + '/login';
  private userUrl = this.baseUrl + '/user/';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() : Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>(this.usersUrl);
  }

  addUser(user : User) : Observable<any>{
    return this.http.post(this.usersUrl,user);
  }

  checkUser(user : CheckUser) : Observable<any> {
    return this.http.post(this.loginUrl,user);
  }

  getUserDetails(name : String) : Observable<UserDetails> {
    return this.http.get<UserDetails>(this.userUrl + name);
  }
}
