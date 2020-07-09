import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LocationService } from '../location.service'
import { from } from 'rxjs';
import { ILocation } from '../../Models/ILocation.model';
import { ILocationSearch } from "../ILocationSearch.model";
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IPaginationModel } from '../../Models/IPaginationModel';

@Component({
  selector: 'app-filter-locations',
  templateUrl: './filter-locations.component.html',
  styleUrls: ['./filter-locations.component.css']
})

export class FilterLocationsComponent implements OnInit, AfterViewInit {

  locationListSorted: ILocation[];
  public thArray: string[] = ['startDate', 'endDate', 'adress', 'city'];
  public dataSource: MatTableDataSource<ILocation>;
  totalCount: number;

  // pageEvent: PageEvent;
  // datasource: null;
  // pageIndex: number;
  // pageSize: number;
  // length: number;

  @ViewChild(MatPaginator, { static: true }) pathPaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public paginationModel: IPaginationModel = new IPaginationModel();

  constructor(private _locationService: LocationService) { }

  ngOnInit(): void {

    // this.getServerData(null);
    this._locationService.getSortLocations().subscribe({
      next: locations => {
        this.dataSource = new MatTableDataSource<ILocation>(locations);
        this.dataSource.paginator = this.pathPaginator;
        this.dataSource.sort = this.sort;

      },
      error: err => console.log(err)
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace    
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches    
    this.dataSource.filter = filterValue;
    
  }

  ngAfterViewInit() {

  }

  switchPage(event: PageEvent) {
    this.paginationModel.pageIndex = event.pageIndex + 1;
    this.paginationModel.pageSize = event.pageSize;
    this.paginationModel.allItemsLength = event.length;
    this.getAllCustomers(this.paginationModel);
  }

  getAllCustomers(paginationModel: IPaginationModel) {
    this._locationService.getAll(paginationModel)
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
        this.dataSource = result.body.value;
      });
  }
  // public getServerData(event?: PageEvent) {
  //   this._locationService.getSortLocations(event).subscribe(
  //     response => {
  //       if (response.error) {
  //         // handle error
  //       }
  //       else {
  //         this.datasource = response.data;
  //         this.pageIndex = response.pageIndex;
  //         this.pageSize = response.pageSize;
  //         this.length = response.length;
  //       }
  //     },
  //     error => {
  //       // handle error
  //     }
  //   );
  //   return event;
  // }
  searchLocation(locationSearch: ILocationSearch) {
    let stringLocation = "";
    if (locationSearch.location != null) {
      stringLocation += "locationSearch.Location=" + locationSearch.location;
    }

    if (locationSearch.startDate != null) {
      if (stringLocation != "") {
        stringLocation += "&locationSearch.StartDate=" + (locationSearch.startDate).toJSON();
      }

      else {
        stringLocation += "locationSearch.StartDate=" + (locationSearch.startDate).toJSON();
      }
    }
    if (locationSearch.endDate != null) {
      if (stringLocation != "") {
        stringLocation += "&locationSearch.EndDate=" + (locationSearch.endDate).toJSON();
      }
      else {
        stringLocation += "locationSearch.EndDate=" + (locationSearch.endDate).toJSON();
      }
    }
    if (locationSearch.age != null) {
      if (stringLocation != "") {
        stringLocation += "&locationSearch.Age=" + locationSearch.age;
      }

      else {
        stringLocation += "locationSearch.Age=" + locationSearch.age
      }

    }
    this._locationService.filterLocation(stringLocation).subscribe({
      next: locations => {
        this.dataSource = new MatTableDataSource<ILocation>(locations);
        this.dataSource.paginator = this.pathPaginator;
        this.dataSource.sort = this.sort;
      },
      error: err => console.log(err)

    });
  }

}
