import { error } from 'node:console';
import { Component } from '@angular/core';
import { SignLayout } from '../../Components/sign-layout/sign-layout';
import { HeaderSign } from '../../Components/header-sign/header-sign';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user-service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private userService: UserService,private toastr:ToastrService,private router:Router) {}

  signUp() {
    if (this.signupForm.valid) {
      this.userService.createUser(this.signupForm.value).subscribe({
        next: (data) => {
          this.toastr.success('Sign Up Successfully');
          this.router.navigate(['/login'])
        },
        error: (err) => this.toastr.error(err.error.message),
      });
    } else {
      this.toastr.warning('Please check the fields and try again');
    }
  }
}
