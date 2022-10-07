import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayBookComponent } from './components/display-book/display-book.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {path: 'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetpassword', component:ForgetPasswordComponent},
  {path:'User/ResetPassword/:token', component:ResetPasswordComponent},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'dashboard', component:DashboardComponent,
  children:[
    {path:'displaybook', component:DisplayBookComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
