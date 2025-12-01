import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.servivce';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: true,
})
export class Login {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loginError = false;

   form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(){
    if(this.form.invalid)
      return;
    const { username, password } = this.form.value;
    const ok = this.auth.login(username!, password!);
    if (!ok) {
      this.loginError = true;
      return;
    }

    const returnUrl =
      this.route.snapshot.queryParamMap.get('returnUrl') || '/dashboard';

      this.router.navigateByUrl(returnUrl);
    }

}
