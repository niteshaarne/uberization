import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.route';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { RegistrationComponent } from './Components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminDashboardComponent,
    AddTaskComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
