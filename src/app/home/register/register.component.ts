import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { IRegisterModel } from '../../Models/IRegisterModel.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registeredPatient: IRegisterModel;
  constructor(private fb: FormBuilder, private _appService: AppService, private _router: Router) {


  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      id: '',
      username: '',
      password: ''
    })
  }

  register() {
    this.registeredPatient = this.registerForm.value;
    this._appService.register(this.registeredPatient).subscribe({
      next: r => this._router.navigate(["/patient", this.registeredPatient.id])
    })
    
  }

}
