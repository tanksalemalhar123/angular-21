import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appHoverColor]',
    standalone: true
})
export class AutoColorDirective {
    @Input() appHoverColor = 'yellow'; // default color
    
    constructor(private elementRef: ElementRef) {
        console.log(this.elementRef);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.elementRef.nativeElement.style.backgroundColor = this.appHoverColor;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.elementRef.nativeElement.style.backgroundColor = '';
    }
}