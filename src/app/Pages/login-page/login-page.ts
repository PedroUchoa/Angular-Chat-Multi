import { Component, Inject } from '@angular/core';
import { SignLayout } from '../../Components/sign-layout/sign-layout';
import { HeaderSign } from '../../Components/header-sign/header-sign';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../Services/user-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  imports: [
    SignLayout,
    HeaderSign,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {}

  doLogin() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: (data) => {
          this.router.navigate(['/chat']);
        },
        error: (err) => this.toastr.error(err.error.message),
      });
    }else{
      this.toastr.warning('Complete your login informations');
    }

  }
}
