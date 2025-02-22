import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: InputEvent): void {
    // Obtém o valor do input
    const input = this.el.nativeElement.value;

    // Remove todos os caracteres não numéricos
    const numericValue = input.replace(/\D/g, '');

    // Formata o CPF
    const formattedValue = this.formatCpf(numericValue);

    // Atualiza o valor do campo
    this.el.nativeElement.value = formattedValue;
  }

  private formatCpf(value: string): string {
    // Adiciona os pontos e traço conforme o comprimento
    if (value.length <= 3) {
      return value;
    } else if (value.length <= 6) {
      return `${value.substring(0, 3)}.${value.substring(3, 6)}`;
    } else if (value.length <= 9) {
      return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}`;
    } else {
      return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9, 11)}`;
    }
  }
}
