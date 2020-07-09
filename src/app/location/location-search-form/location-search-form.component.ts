import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ILocation } from '../../Models/ILocation.model';


@Component({
  selector: 'app-location-search-form',
  templateUrl: './location-search-form.component.html',
  styleUrls: ['./location-search-form.component.css']
})
export class LocationSearchFormComponent implements OnInit {


  locationSearchForm: FormGroup;
  locationDetails: any;

  

  
  
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.locationSearchForm = this.fb.group({
      startDate: '',
      endDate: '',
      age: '',
      location: ''
    })
  }

  @Output()
  searchLocationEvent: EventEmitter<ILocation> = new EventEmitter();
  searchLocation() { 
    debugger;   
    this.locationDetails = this.locationSearchForm.value;
    if(this.locationDetails.startDate ==''){
      this.locationDetails.startDate=null;
    }    
    if(this.locationDetails.endDate ==''){
      this.locationDetails.endDate=null;
    }
    if(this.locationDetails.age ==''){
      this.locationDetails.age=null;
    }
    if(this.locationDetails.location ==''){
      this.locationDetails.location=null;
    }
    this.locationSearchForm.reset();
    debugger;
    this.searchLocationEvent.emit(this.locationDetails);
  }
}


