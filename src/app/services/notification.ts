import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Notification {
  constructor(private http: HttpClient) {}
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

  getPost(id: string): Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
