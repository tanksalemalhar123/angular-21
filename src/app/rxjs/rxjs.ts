import { Component, inject } from '@angular/core';
import { concatMap, exhaustMap, forkJoin, from, map, mergeMap, switchMap } from 'rxjs';
import { Notification } from '../services/notification';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss',
})
export class Rxjs {
  ids = [1,2,3,4,5];
  notificationService = inject(Notification);

  ngOnInit() {
    //MergeMap
  from(this.ids).pipe(
    mergeMap((id) => this.notificationService.getPost(id.toString()))
  ).subscribe((response) => {
    //console.log(response);
  })

  //ConcatMap
  from(this.ids).pipe(
    concatMap((id) => this.notificationService.getPost(id.toString()))
  ).subscribe((response) => {
   //console.log(response);
  })

  //ForkJoin
  const obs1 = this.notificationService.getPost('1');
  const obs2 = this.notificationService.getPost('2');
  const obs3 = this.notificationService.getPost('3');

  forkJoin([obs1, obs2, obs3]).subscribe(([res1, res2, res3]) => {
  //console.log('Post 1:', res1);
  //console.log('Post 2:', res2);
  //console.log('Post 3:', res3);
    });
  

  //SwitchMap
    from(this.ids).pipe(
    switchMap((id) => this.notificationService.getPost(id.toString()))
  ).subscribe((response) => {
   //console.log(response);
  });

  //ExhaustMap
      from(this.ids).pipe(
    exhaustMap((id) => this.notificationService.getPost(id.toString()))
  ).subscribe((response) => {
   console.log(response);
  });

  //Map
  from(this.ids).pipe(
    exhaustMap((id) => this.notificationService.getPost('1').pipe(map(post => post.title.toUpperCase())))
  ).subscribe((response) => {
   console.log(response);
  });

  }
}
