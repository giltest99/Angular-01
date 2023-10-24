import { Component } from '@angular/core';

@Component({
  selector: 'app-konkat',
  templateUrl: './konkat.component.html',
  styleUrls: ['./konkat.component.css'],
})
export class KonkatComponent {
  inputData: string = '';
  outputData1: string = '';
  outputData2: string = '';
  numberOfValues: number = 0;

  message() {
    alert(`Hello`);
  }

  commasOnly() {
    if (!this.inputData) return;
    const values = this.inputData.trim().split('\n');
    let res = '';
    let len = 0;
    for (let item of values) {
      if (item.trim() !== '') {
        res += `${item},`;
        len++;
      }
    }
    res = res.slice(0, -1);
    this.outputData1 = res;
    this.numberOfValues = len;
  }

  resetAllTextareas() {
    this.inputData = '';
    this.outputData1 = '';
    this.numberOfValues = 0;
  }
}

// Fonction from gf-project
/* onlyColumn() {
  if (!this.inputData) return;
  let values = this.inputData.trim().split('\n');
  let res = '';
  let len = 0;
  for (let item of values) {
    if (item.trim() !== '') {
      res += `${item}\n`;
      len++;
    }
  }
  this.outputData = res;
  this.numberOfValues = len;
} */
