import { UserService } from './user-service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const toastr = inject(ToastrService);
  const localToken =
    typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;

  userService.getUserByTokenJWT(localToken).subscribe({
    next: (data) => {},
    error: (err) => {
      router.navigate(["/login"])
      return false;
    },
  });
  return true;
};
