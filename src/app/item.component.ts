import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  template: `
  <div class="container">
    <h1>Hello</h1>
  </div>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class ItemsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('HI');
  }
  
}