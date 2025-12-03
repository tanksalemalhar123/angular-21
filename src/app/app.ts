import { Component, computed, signal } from '@angular/core';
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
  mySharedSignal = computed(() => this.count());
  constructor(){
    this.count.set(1);
    this.count.update((num) => {
      return num + 100
    });

  }
}
