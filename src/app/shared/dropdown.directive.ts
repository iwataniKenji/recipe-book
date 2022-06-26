import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // HostBinding -> muda class na condição
  @HostBinding('class.open') isOpen = false;

  // HostListener -> cria evento a ser ouvido e um método para manipulá-lo
  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
  }

  // fechar ao clicar fora do toggle
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
