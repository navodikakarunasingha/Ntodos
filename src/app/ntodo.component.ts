import { Component, Input } from '@angular/core';

@Component({
  selector: 'hi',
  template: `<h1>Hi {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class NtodoComponent  {
  @Input() name: string;
}