import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from 'src/app/services/authService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor( private Authguardservice: AuthguardService, private router: Router ){};

  canActivate() : boolean
  
  {
    if (!this.Authguardservice.gettoken()) {  
      console.log("token expired")
      this.router.navigateByUrl("/login");  
  }  
  return this.Authguardservice.gettoken();  
  }
  
}
