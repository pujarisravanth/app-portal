import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { User } from '../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title = 'Sign Up';
  data = new User ;
  confirm_pwd : string ;

  constructor(
    private httpService : HttpService
  ) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => console.log(data));
  }

  signUp(signUpForm : NgForm) : void {
    console.log(signUpForm.value);
    if(this.confirm_pwd == this.data.password){
      this.httpService.addUser(this.data).subscribe(data => console.log(data));
    }
  }
}
