import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private _router: Router) {}

  login = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  });

  //  getter function for email
  get email(): UntypedFormControl {
    return this.login.get('email') as UntypedFormControl;
  }

  //  getter function for password
  get password(): UntypedFormControl {
    return this.login.get('password') as UntypedFormControl;
  }

  // function to login
  onLogin() {
    console.log(this.email.value, this.password.value);
    this._router.navigate(['/dashboard']);
  }
}
