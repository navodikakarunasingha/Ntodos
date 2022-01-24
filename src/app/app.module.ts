import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NtodoTitleComponent } from './ntodotitle/ntodotitle.component';
import { NtodoCreateComponent } from './ntodocreate/ntodocreate.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NtodoTitleComponent, NtodoCreateComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
