import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { CheckUser } from '../User';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  title = 'Sign in';
  data = new CheckUser;

  constructor(
    private router: Router,
    private httpService : HttpService
  ) { }

  ngOnInit() {
  }

  signIn(signInForm : NgForm) : void {
    this.httpService.checkUser(this.data).subscribe(msg => {
      if(msg) {
        console.log('Valid User');
        this.router.navigate(['/user/'+this.data.username]);
      }
    })
  }
}
