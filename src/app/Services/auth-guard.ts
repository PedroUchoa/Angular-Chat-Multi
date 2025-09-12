import { UserService } from './user-service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const userService = inject(UserService)
  const localToken =
  typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;

  userService.getUserByTokenJWT(localToken).subscribe(
    (data)=>{},
    (error)=> {
      alert("Please Do Login First!")
      router.navigateByUrl('login')
      return false
    }
  )

  return true;
};
