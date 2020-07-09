import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocation } from '../Models/ILocation.model';
import { ILocationSearch } from './ILocationSearch.model';
import { IPaginationModel } from '../Models/IPaginationModel';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private endpoint = `http://localhost:52459/api/Location/`;
  constructor(private http: HttpClient) { 

  }
 
  getSortLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`http://localhost:52459/api/Location/sort`);   
  }

  filterLocation(_locationSearch: string): Observable<ILocation[]> {
    
    return this.http.get<ILocation[]>(`http://localhost:52459/api/Location?${_locationSearch}`);   
  }

//   getAll<T>() {
//     const mergedUrl = `${this.endpoint}` +
//         `?page=${this.paginationService.page}&pageCount=${this.paginationService.pageCount}`;
//     return this.httpClient.get<T>(mergedUrl, { observe: 'response' });
// }

  getAll(paginationModel: IPaginationModel): Observable<any>{
    const mergedUrl = `${this.endpoint}` +
        `getPage?page=${paginationModel.pageIndex}&pageCount=${paginationModel.pageSize}`;
    return this.http.get<any>(mergedUrl, { observe: 'response' });
  }
      
}
