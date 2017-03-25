import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlighted]'
})
export class HighlightDirective {
    constructor(private el: ElementRef){ }

   @Input('highlighted') activeClass: string; 
   
   @HostListener('click') private onClick(): void {
        this.highlight(this.activeClass);
   }

   private highlight (activeClass: string) {
            this.el.nativeElement.classList.toggle(activeClass);
        };
}