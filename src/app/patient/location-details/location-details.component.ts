import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ILocation } from '../../Models/ILocation.model';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  locationForm: FormGroup;
  locationDetails: any;
  _locationToEdit: ILocation;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      startDate: '',
      endDate: '',
      city: '',
      adress: ''
    })
  }
  get locationToEdit(): ILocation {
    return this._locationToEdit;
  }

  @Input()
  set locationToEdit(value: ILocation) {
    this._locationToEdit = value;
    this.locationForm.setValue({
      startDate: this._locationToEdit.startDate,
      endDate: this._locationToEdit.endDate,
      city: this._locationToEdit.city,
      adress: this._locationToEdit.adress

    })
  }



  @Output()
  addLocationEvent: EventEmitter<ILocation> = new EventEmitter();
  addLocation() {
    this.locationDetails = this.locationForm.value;
    this.locationForm.reset();
    this.addLocationEvent.emit(this.locationDetails);
  }
}
