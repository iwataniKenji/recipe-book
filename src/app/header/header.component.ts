import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // output -> filho envia evento para pai
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    // featureSelected recebe valor da string e envia para o pai
    this.featureSelected.emit(feature);
  }
}
