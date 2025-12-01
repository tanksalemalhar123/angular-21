import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));
  isLoggedIn = computed(() => this._isLoggedIn());
  
  login(username: string, password: string){
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'dummy-token');
      this._isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('token');
    this._isLoggedIn.set(false);
  }

   getToken(): string | null {
    return localStorage.getItem('token');
  }
}
