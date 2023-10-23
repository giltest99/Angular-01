import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() bgColor: string = '';
  @Input() fgColor: string = '';
  @Input() onclick!: () => void;

  handleClick() {
    if (this.onclick) {
      this.onclick();
    }
  }
}
