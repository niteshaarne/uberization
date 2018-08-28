import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Angular 4 Project!';
   todaydate;
   componentproperty;
   emailid;
   formdata;
   constructor() { }
   ngOnInit() {
      //this.todaydate = this.myservice.showTodayDate();
      this.formdata = new FormGroup({
         emailid: new FormControl("angular@gmail.com", Validators.required),
         passwd: new FormControl("abcd1234", Validators.required)
      });
   }
   onClickSubmit(data) {this.emailid = data.emailid;}

}
