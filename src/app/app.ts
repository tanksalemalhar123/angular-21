import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myapp');
  count = signal(0);
  constructor(){
    console.log(this.count());
    this.count.set(1);
    console.log(this.count());
    this.count.update((num) => {
      return num + 100
    });

  }
}
