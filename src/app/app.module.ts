import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NtodoTitleComponent } from './ntodotitle/ntodotitle.component';
import { NtodoCreateComponent } from './ntodocreate/ntodocreate.component';
import { NtodoListComponent } from './ntodo/ntodo.component';
import { NtodoService } from './ntodo.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NtodoTitleComponent, NtodoCreateComponent, NtodoListComponent],
  providers: [NtodoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
