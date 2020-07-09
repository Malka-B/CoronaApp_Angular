import { Component, OnInit } from '@angular/core';
import { ILocation } from '../../Models/ILocation.model';
import { PatientService } from '../patient.service';
import { IPatient } from '../../Models/IPatient.model';
import { throwIfEmpty } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-path',
  templateUrl: './report-path.component.html',
  styleUrls: ['./report-path.component.css']
})

export class ReportPathComponent implements OnInit {

  thArray: string[] = ['Start date', 'End date', 'city', 'location', 'remove', 'edit'];
  patient: IPatient;
  locationList: ILocation[];
  locationListToAdd: ILocation[] = [];
  welcome: string = "Welcome";
  locationToEdit: ILocation;
  patientIdInput: string = '';
  patientId: number;

  constructor(private _patientService: PatientService, private _acr: ActivatedRoute) {


  }

  ngOnInit(): void {
    this._acr.paramMap.subscribe(params => {
      debugger;
      this.patientId = +params.get("patientId");

    });

    if (this.patientId) {
      debugger;
      this._patientService.getLocations(this.patientId).subscribe(
        data => {
          this.patient = data;
          this.welcome = `Welcome ${this.patient.userName}`;
          this.locationList = data.locationsList;
        }, err => {
          this.locationList = [];
        });
    }

  }

  deleteDetails(locationToDelete: ILocation) {
    var index = this.locationList.findIndex(x =>
      x.startDate == locationToDelete.startDate &&
      x.endDate == locationToDelete.endDate &&
      x.city == locationToDelete.city &&
      x.adress == locationToDelete.adress);
    this.locationList.splice(index, 1);
    locationToDelete.patientId = this.patient.id;
    this._patientService.deleteLocation(locationToDelete).subscribe({
      next: result => {
        console.log("hello");
      },
      error: err => alert(err)

    });
  }

  addLocation(locationToAdd: ILocation) {
    console.log(locationToAdd);
    this.locationListToAdd.push(locationToAdd);
    this.locationList.push(locationToAdd);

  }

  getLocationsById(id: number) {
    debugger;
    this._patientService.getLocations(id).subscribe({
      next: locations => {
        this.patient = locations;
        this.welcome = `Welcome ${this.patient.userName}`;
        this.locationList = locations.locationsList;
      },
      error: err => alert(err)
    });
  }
  save() {
    this._patientService.saveNewLocations(this.locationListToAdd, this.patient.id).subscribe({
      next: result => {
        alert("inSave");
        this.locationList = [];
        this.welcome = "Welcome";
        this.patientIdInput = '';

      },
      error: err => alert("try to save again!")
    });
  }

  editDetails(location: ILocation) {
    this.locationToEdit = location;
  }
}
