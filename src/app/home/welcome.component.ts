import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { Route, Router } from '@angular/router';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public pageTitle = 'Welcome';

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _appService: AppService, private _router: Router) {


  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: '',
      password: ''
    })
  }

  // login(uesrName: string, password: string){
  login() {
    
    console.log(this.loginForm.value);
    
    this._appService.login(this.loginForm.value).subscribe({
      next: patientId => {
        if (patientId != 0) {
          alert("logined");
          this._router.navigate(["/patient",patientId]);
        }
        else {
          alert("let's register now!");
        }
      },
      error: err => alert(err)

    })
  }

}
