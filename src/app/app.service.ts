import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from './ILogin.model';
import { IRegisterModel } from './Models/IRegisterModel.model';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  l: any;

  constructor(private http: HttpClient) { }

  login(loginObject: ILogin): Observable<Number> {
    debugger;
    this.l = {
      "username": loginObject.Username,
      "password": loginObject.password
    }
    return this.http.post<number>(`http://localhost:52459/api/Login/loginAsync`, loginObject);

  }
  
  register(registeredPatient: IRegisterModel): Observable<boolean> {
    debugger;
    registeredPatient.id = +registeredPatient.id;
    debugger;
    return this.http.post<boolean>(`http://localhost:52459/api/PatientControllerForAngular/registerAngular`, registeredPatient);

  }
  
}
