import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  standalone: true,
})
export class Child {
@Input() inputProp!: string;
@Output() sendToParent = new EventEmitter<string>();

constructor() { 
  console.log(this.inputProp);
}
notifyParent() {
  this.sendToParent.emit('Hello from Child Component at ' + new Date().toLocaleTimeString()); 
}
}
