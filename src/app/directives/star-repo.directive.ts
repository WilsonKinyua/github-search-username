import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStarRepo]',
})
export class StarRepoDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click') onClicks() {
    this.starColor('#ea1e63');
  }

  private starColor(action: string) {
    this.elementRef.nativeElement.style.color = action;
  }
}
