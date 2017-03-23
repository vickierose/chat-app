import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlighted]'
})
export class HighlightDirective {
    constructor(private el: ElementRef){ }

   @Input('highlighted') highlightColor: string; 
   
   @HostListener('click') private onClick(): void {
       debugger;
        this.highlight(this.highlightColor);
   }

   private highlight (color: string) {
            this.el.nativeElement.style.backgroundColor = color;
        };
}