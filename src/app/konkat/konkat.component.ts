import { Component, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('textareaElement') textareaElement!: ElementRef;
  @ViewChild('textareaInputData') textareaInputData!: ElementRef;

  message() {
    alert(`Hello`);
  }

  selectText() {
    const textarea = this.textareaElement.nativeElement;
    textarea.select();
    this.copyText();
  }

  copyText() {
    const textarea = this.textareaElement.nativeElement;
    textarea.select();
    document.execCommand('copy');
  }

  columnOnly() {
    if (!this.inputData) return;
    const values = this.inputData.trim().split('\n');
    let res = '';
    let len = 0;
    for (let item of values) {
      if (item.trim() !== '') {
        res += `${item}\n`;
        len++;
      }
    }
    res = res.slice(0, -1);
    this.outputData1 = res;
    this.numberOfValues = len;
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
    this.outputData2 = res;
    this.numberOfValues = len;
  }
  simpleQuotes() {
    if (!this.inputData) return;
    const values = this.inputData.trim().split('\n');
    let res = '';
    let len = 0;
    for (let item of values) {
      if (item.trim() !== '') {
        res += `'${item}',`;
        len++;
      }
    }
    res = res.slice(0, -1);
    this.outputData1 = res;
    this.numberOfValues = len;
  }

  doubleQuotes() {
    if (!this.inputData) return;
    const values = this.inputData.trim().split('\n');
    let res = '';
    let len = 0;
    for (let item of values) {
      if (item.trim() !== '') {
        res += `"${item}",`;
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
    this.outputData2 = '';
    this.numberOfValues = 0;
    const textarea = this.textareaInputData.nativeElement;
    textarea.focus();
  }
}
