import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  typeOfWork;
  numberOfCases;
  dateOfWork;
  responseDeadline;
  formdata;
  constructor(private router: Router) { }

  ngOnInit() {
     this.formdata = new FormGroup({
      typeOfWork: new FormControl("", Validators.required),
      numberOfCases: new FormControl("", Validators.required),
      dateOfWork : new FormControl("", Validators.required),
      responseDeadline : new FormControl("", Validators.required)
   });
  }

  onClickSubmit(data) {
    console.log(data);
    this.typeOfWork = data.typeOfWork;
    this.numberOfCases = data.numberOfCases;
    this.dateOfWork = data.dateOfWork;
    this.responseDeadline = data.responseDeadline;
    this.router.navigate(['/adminDashboard'])
    
  }
}
