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
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminDashboardComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
