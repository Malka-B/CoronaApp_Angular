import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FilterLocationsComponent } from './filter-locations/filter-locations.component';
import { LocationSearchFormComponent } from './location-search-form/location-search-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    FilterLocationsComponent,
    LocationSearchFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'locations', component: FilterLocationsComponent} 
    ]),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,     
    MatIconModule, 
    
  ]
})
export class LocationModule { }
