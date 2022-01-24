import { Component, Input } from '@angular/core';

@Component({
  selector: 'ntodo-title',
  template: `<h1>{{name}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class NtodoTitleComponent  {
  @Input() name: string;
}