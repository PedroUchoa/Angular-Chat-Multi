import { error } from 'node:console';
import { Component } from '@angular/core';
import { SignLayout } from '../../Components/sign-layout/sign-layout';
import { HeaderSign } from '../../Components/header-sign/header-sign';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-sign-up-page',
  imports: [
    SignLayout,
    HeaderSign,
    RouterLink,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './sign-up-page.html',
  styleUrl: './sign-up-page.css',
})
export class SignUpPage {
  signupForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    name: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService) {}

  signUp() {
    if (this.signupForm.valid) {
      this.userService.createUser(this.signupForm.value).subscribe({
        next: (data) => {
          alert('Sign Up Successfully');
        },
        error: (e) => alert(e.error),
      });
    } else {
      alert('Error: Please check the fields and try again');
    }
  }
}
