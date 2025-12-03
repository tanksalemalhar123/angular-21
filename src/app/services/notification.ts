import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

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

  //Replay Subject
  private messages$ = new ReplaySubject<string>(3);
  myReplayObservable$ = this.messages$.asObservable();

  notify(data: any){
    this.mySubject.next(data);
  }

  notifyBS(data: any){
    this.myBS.next(data);
  }


  sendReplayMessage(msg: string) {
    this.messages$.next(msg);
  }

  get replayMessages() {
    return this.messages$.asObservable();
  }
}
