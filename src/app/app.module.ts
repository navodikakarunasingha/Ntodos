import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NtodoComponent } from './ntodo.component';
import { NtodoTitleComponent } from './ntodotitle/ntodotitle.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NtodoComponent, NtodoTitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
