import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { RegistrationComponent } from './Components/registration/registration.component';


export const ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'adminDashboard', component: AdminDashboardComponent},
    {path: 'addTask', component: AddTaskComponent},
    {path: 'registration', component: RegistrationComponent}
    

]
