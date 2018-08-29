import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from './login.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = '';
  emailid;
  passwd;
  formdata;

  constructor(private router: Router,
    private http: HttpClient) { }
  ngOnInit() {
      this.formdata = new FormGroup({
        emailid: new FormControl("", Validators.required),
        passwd: new FormControl("", Validators.required)
     });
  }
  onClickSubmit(data) {
    console.log(data);
    this.emailid = data.emailid;
    this.passwd = data.passwd;

    
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const resp = 
    
    this.http.post('rest/authenticateUser', {
      emailid: this.emailid,
      passwd: this.passwd,
    },
     {
       headers:new HttpHeaders({
           'Content-Type' : 'application/json'
       })
  }
)
      .subscribe(
        res => {
          console.log("Service response --> "+res);
          this.router.navigate(['/adminDashboard'])
        },
        err => {
          console.log("Error occured: "+err);
        });

// this.http.get<String>('/rest/testController', {headers: headers}).subscribe(
//   data => {
//     console.log("Email: " + this.emailid);
//     console.log("Passwd: " + this.passwd);
//   }
//   ,
//   (err: HttpErrorResponse) => {
//     if (err.error instanceof Error) {
//       console.log("Client-side error occured. --> "+err.message);
//     } else {
//       console.log("Server-side error occured. --> "+err.message);
//     }
//   }
// );
    this.router.navigate(['/adminDashboard'])
    console.log("Dunno what --> "+resp);
  }
  

}
