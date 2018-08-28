import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  titles;
  description;
  formdata;
  constructor(private router: Router) { }

  ngOnInit() {
     this.formdata = new FormGroup({
      titles: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
   });
  }

  onClickSubmit(data) {
    console.log(data);
    this.titles = data.titles;
    this.description = data.description;
    this.router.navigate(['/adminDashboard'])
    
  }
}
