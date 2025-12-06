// dashboard.component.ts
import { Component, effect, inject, signal } from '@angular/core';
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
import { UpperCasePipe } from '../pipes/upper-case-pipe';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Child, AutoColorDirective,ChangeTextDirective,Sendercomponent,ReceiverComponent,Rxjs,UpperCasePipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {
  private auth = inject(AuthService);
  private router = inject(Router);
  private app = inject(App);
  myText = 'Original';
  users = signal<number[]>([1,2,3,4,5]);
  someIterable: number[] = [1,2,3];
  status = 'pending'; 
  isActive = true;
  myVar = signal(0);

  parentMessage = 'Message from Dashboard Component';

  constructor() {
    effect(() => {
      console.log('myVar changed to:', this.myVar());
    });
  }
  changeMessage() {
    this.parentMessage = 'New message at ' + new Date().toLocaleTimeString();
    this.myVar.set(2);
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
