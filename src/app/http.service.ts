import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, CheckUser } from './User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  // URL to web api
  private baseUrl = 'http://localhost:9090';
  private usersUrl = this.baseUrl + '/users';
  private signupUrl = this.baseUrl + '/signup';
  private loginUrl = this.baseUrl + '/login';
  private userUrl = this.baseUrl + '/user/';
  private changePwdUrl = this.baseUrl + '/changePwd';

  constructor(
    private http: HttpClient
  ) { }

  // Acquires all users
  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  // Adds new user and returns a boolean
  addUser(user : User) : Observable<any> {
    return this.http.post(this.signupUrl,user);
  }

  // checks the user with username and password
  checkUser(user : CheckUser) : Observable<any> {
    return this.http.post(this.loginUrl,user);
  }

  // return user details with the username {{name}}
  getUser(name : String) : Observable<any> {
    return this.http.get<any>(this.userUrl + name);
  }

  // for changing forgotten paswword, returns boolean
  changePwd(user : User) : Observable<any> {
    return this.http.post(this.changePwdUrl, user);
  }

}
