import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.servivce';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  
  if (auth.isLoggedIn()) {
    return true;
  }
  // Not logged in → send to /login and remember target URL
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  });
};
