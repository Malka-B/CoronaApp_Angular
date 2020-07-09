import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientModule } from './patient/patient.module';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from './patient/patient.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card'
import { ReportPathComponent } from './patient/report-path/report-path.component';
import { LocationModule } from './location/location.module';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './home/register/register.component';
@NgModule({
  declarations: [
    AppComponent,WelcomeComponent, RegisterComponent   
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,    
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'patient', component: ReportPathComponent},
      {path: "patient/:patientId", component: ReportPathComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    PatientModule,    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LocationModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],  
  bootstrap: [AppComponent],
  exports: [MatDatepickerModule]
})
export class AppModule { }
