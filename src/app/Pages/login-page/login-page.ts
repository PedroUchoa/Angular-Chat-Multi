import { Component } from '@angular/core';
import { SignLayout } from '../../Components/sign-layout/sign-layout';
import { HeaderSign } from '../../Components/header-sign/header-sign';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [SignLayout, HeaderSign, ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  loginForm = new FormGroup({
    login:new FormControl('', Validators.required),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ])
  })

}
