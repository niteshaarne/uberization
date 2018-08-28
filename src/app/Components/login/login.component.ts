import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Uberization Login';
  emailid;
  formdata;
  constructor(private router: Router) { }
  ngOnInit() {
     //this.todaydate = this.myservice.showTodayDate();
     this.formdata = new FormGroup({
        emailid: new FormControl("", Validators.required),
        passwd: new FormControl("", Validators.required)
     });
  }
  onClickSubmit(data) {
    console.log(data);
    this.emailid = data.emailid;
    this.emailid = data.passwd;
    this.router.navigate(['/adminDashboard'])
    
  }

}
