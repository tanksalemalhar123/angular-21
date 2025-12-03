import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Notification {
  //Subject
  private mySubject = new Subject<any>();
  myObservable$ = this.mySubject.asObservable();

  //Behaviour Subject
  private myBS = new BehaviorSubject<any>(1);
  myBSObservable$ = this.myBS.asObservable();

  notify(data: any){
    this.mySubject.next(data);
  }

  notifyBS(data: any){
    this.myBS.next(data);
  }
}
