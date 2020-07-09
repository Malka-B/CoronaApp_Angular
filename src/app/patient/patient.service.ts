
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IPatient } from '../Models/IPatient.model';
import { ILocation } from '../Models/ILocation.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getLocations(id: number): Observable<IPatient> {

    return this.http.get<IPatient>(`http://localhost:52459/api/PatientControllerForAngular/getById?id=${id}`);
    // .pipe(
    //   tap(data => console.log('All: ' + JSON.stringify(data))),
    //   catchError(this.handleError)
    // );
  }

  deleteLocation(locationToDElete: ILocation): Observable<boolean> {    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: locationToDElete
    };
    return this.http.delete<boolean>(`http://localhost:52459/api/PatientControllerForAngular/deleteAngular`,
      httpOptions

    );
  }
  
  saveNewLocations(locationListToAdd: ILocation[], id: number): Observable<boolean>{
    debugger;
    return this.http.put<boolean>(`http://localhost:52459/api/PatientControllerForAngular/put?patientId=${id}`,
    locationListToAdd
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
