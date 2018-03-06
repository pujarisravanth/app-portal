import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';
import { HomeComponent } from './home/home.component';

const routes : Routes = [
  {path : '', redirectTo : '/sign-in', pathMatch : 'full'},
  {path : 'sign-in', component : SignInComponent},
  {path : 'sign-up', component : SignUpComponent},
  {path : 'forgot-pwd', component : ForgotPwdComponent},
  {path : 'user/:name', component : HomeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
