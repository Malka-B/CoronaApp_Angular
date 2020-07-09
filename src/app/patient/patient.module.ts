import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPathComponent } from './report-path/report-path.component';
import { RouterModule } from '@angular/router';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [ReportPathComponent, LocationDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      
    ]),
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    
      
  ],
  exports: [MatDatepickerModule,MatFormFieldModule]
  
})
export class PatientModule { }
