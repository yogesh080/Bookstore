import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/adminServices/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  AdminloginForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder,private user: AdminServiceService) { }

  ngOnInit() {
    this.AdminloginForm = this.formBuilder.group({   
      adminEmail: ['', [Validators.required, Validators.email]],
      adminPassword: ['', [Validators.required, Validators.minLength(6)]]
    }
    );
  }

  get f() { return this.AdminloginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.AdminloginForm.valid) {
      let reqdata ={
        AdminEmail: this.AdminloginForm.value.adminEmail,
        AdminPassword: this.AdminloginForm.value.adminPassword
      }
      this.user.adminlogin(reqdata).subscribe((response:any) => {
        console.log(response)

      }, error => {
        console.log(error)
      }
      )
    }

  }
}
