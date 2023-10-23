import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
})
export class LabelComponent {
  @Input() labelText: string = '';
  @Input() labelFor: string = '';
}
