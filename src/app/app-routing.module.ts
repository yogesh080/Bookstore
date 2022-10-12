import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtoCardComponent } from './components/addto-card/addto-card.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayBookComponent } from './components/display-book/display-book.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { GetWishListComponent } from './components/get-wish-list/get-wish-list.component';
import { GetbookbyIdComponent } from './components/getbookby-id/getbookby-id.component';
import { LoginComponent } from './components/login/login.component';
import { OrderSuccessMsgComponent } from './components/order-success-msg/order-success-msg.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  {path: 'registration', component:RegistrationComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {path:'login', component:LoginComponent},
  {path:'forgetpassword', component:ForgetPasswordComponent},
  {path:'User/ResetPassword/:token', component:ResetPasswordComponent},
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'dashboard', component:DashboardComponent,
  children:[
    { path: '', redirectTo: '/dashboard/displaybook', pathMatch: 'full' },
    {path:'displaybook', component:GetAllBooksComponent  },
    {path:'wishlist', component:GetWishListComponent},
    {path:'book', component:GetbookbyIdComponent},
    {path:'cart', component:AddtoCardComponent},
    {path:'orderplaced', component:OrderSuccessMsgComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
