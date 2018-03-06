import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  title = 'Change Password';
  username : string;
  password : string;
  confirm_pwd : string;
  email : string; 

  constructor() { }

  ngOnInit() {
  }

}
