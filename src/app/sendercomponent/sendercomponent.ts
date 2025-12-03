import { Component, inject } from '@angular/core';
import { Notification } from '../services/notification';

@Component({
  selector: 'app-sendercomponent',
  imports: [],
  templateUrl: './sendercomponent.html',
  styleUrl: './sendercomponent.scss',
  standalone: true
})
export class Sendercomponent {
  notification = inject(Notification);

  triggerObservable(){
    this.notification.notify('Hello from Sendercomponent');
    this.notification.notifyBS('Hello BS');
    this.notification.notifyBS('Hello BS New');
  }

  constructor() {
    this.notification.sendReplayMessage("Hello!");
    this.notification.sendReplayMessage("Welcome!");
   }

}
