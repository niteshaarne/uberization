  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = '';
  firstName;
  lastName;
  countrycode;
  mobileNumber;
  emailId;
  password;
  caseProcessing;
  medicalReview;

  formdata;

  constructor(private router: Router) { }

  ngOnInit() {

    this.formdata = new FormGroup({
      emailId: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      firstName : new FormControl("", Validators.required),
      lastName : new FormControl("", Validators.required),
      countrycode : new FormControl("", Validators.required),
      mobileNumber : new FormControl("", Validators.required),
      caseProcessing : new FormControl("", Validators.required),
      medicalReview : new FormControl("", Validators.required)


   });
  }

  onClickSubmit(data) {
    console.log(data);
    this.emailId = data.emailId;

    this.password = new FormControl("", Validators.required),
    this.firstName = new FormControl("", Validators.required),
    this.lastName = new FormControl("", Validators.required),
    this.countrycode = new FormControl("", Validators.required),
    this.mobileNumber = new FormControl("", Validators.required),
    this.caseProcessing = new FormControl("", Validators.required),
    this.medicalReview = new FormControl("", Validators.required),
    this.router.navigate(['/adminDashboard'])
    
  }

}
