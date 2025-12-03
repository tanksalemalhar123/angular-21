import { Component } from '@angular/core';
import { Notification } from '../services/notification';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-receiver-component',
  imports: [],
  templateUrl: './receiver-component.html',
  styleUrl: './receiver-component.scss',
  standalone: true
})
export class ReceiverComponent {
private destroy$ = new Subject<void>();

// listener.component.ts
constructor(private notif: Notification) {  

  this.notif.myObservable$.subscribe((message) => {
    alert('Received in ReceiverComponent: ' + message);
  });
  
  this.notif.myBSObservable$.pipe(
    takeUntil(this.destroy$)
  ).subscribe((message) => {
    console.log('Received in ReceiverComponent from BS: ' + message);
  });

  //Replay Subject Subscribing to the observable
  this.notif.myReplayObservable$.subscribe(msg => {
    console.log("Received:", msg);
  });

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
