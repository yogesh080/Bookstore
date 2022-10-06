import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userServices/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber:['', Validators.required]
    });
  }



  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let reqdata ={
        FullName: this.registerForm.value.fullName,
        Email: this.registerForm.value.email,
        Password: this.registerForm.value.password,
        MobileNumber: parseInt(this.registerForm.value.mobileNumber)
      }
      this.user.registration(reqdata).subscribe((response:any) => {
        console.log(response)

      }, error => {
        console.log(error)
      }
      )
    }
  }

}

