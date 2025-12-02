import { Directive, ElementRef, EventEmitter, Host, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[appChangeText]',
    standalone: true
})

export class ChangeTextDirective{
    constructor(private elementRef: ElementRef) {}
    @Output() changeText = new EventEmitter<string>();
    
    @HostListener('click')
    OnClick(){
        this.changeText.emit('To this!!qowdioqd');
    }

}