import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  title = 'Change Password';
  data = new User
  confirm_pwd : string;

  constructor(
    private httpService : HttpService
  ) { }

  ngOnInit() {
  }

  forgotPassword(forgotPasswordForm : NgForm) {
    if(this.confirm_pwd == this.data.password){
      this.httpService.changePwd(this.data).subscribe(msg => {
        if(msg) console.log("Sucessfully changed password");
        else console.log("Password change failed");
      });
    }
  }
}
