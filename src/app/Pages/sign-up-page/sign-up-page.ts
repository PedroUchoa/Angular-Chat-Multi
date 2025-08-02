import { Component } from '@angular/core';
import { SignLayout } from '../../Components/sign-layout/sign-layout';
import { HeaderSign } from '../../Components/header-sign/header-sign';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up-page',
  imports: [SignLayout,HeaderSign,RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css'
})
export class SignUpPage {
  signupForm = new FormGroup({
    login:new FormControl('', Validators.required),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]),
    name: new FormControl('', Validators.required)
  })
}
