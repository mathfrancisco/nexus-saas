import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [class]="baseClass + ' ' + variantClass"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() disabled = false;

  protected get baseClass(): string {
    return 'px-4 py-2 rounded-lg font-medium transition-colors';
  }

  protected get variantClass(): string {
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
    };
    return variants[this.variant];
  }
}
