import { Component, OnInit } from '@angular/core';
//import { ItemService } from './services/item.service'

@Component({
  selector: 'app-items',
  template: `
  <div class="container">
    <h1>Hello</h1>
  </div>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class ItemsComponent implements OnInit {
  //constructor(private itemService: ItemService) {}
  constructor() {}
  ngOnInit() {
    console.log('HI');
    //console.log('ngOnInit ran ');
  }
  
}