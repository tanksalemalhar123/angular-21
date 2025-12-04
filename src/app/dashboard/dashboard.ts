// dashboard.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.servivce';
import { Child } from '../child/child';
import { AutoColorDirective } from '../directives/app-hover-color.directive';
import { ChangeTextDirective } from '../directives/change-text.directive';
import { App } from '../app';
import { Sendercomponent } from '../sendercomponent/sendercomponent';
import { ReceiverComponent } from '../receiver-component/receiver-component';
import { Rxjs } from '../rxjs/rxjs';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Child, AutoColorDirective,ChangeTextDirective,Sendercomponent,ReceiverComponent,Rxjs],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {
  private auth = inject(AuthService);
  private router = inject(Router);
  private app = inject(App);
  myText = 'Original';

  parentMessage = 'Message from Dashboard Component';

  changeMessage() {
    this.parentMessage = 'New message at ' + new Date().toLocaleTimeString();
  }

  handleChildMessage(message: string) {
    alert('Received from child: ' + message);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  
  changeMe(event: any) {
    this.myText = 'To this';
    alert(event);
    console.log(this.app.mySharedSignal())
  }
}
