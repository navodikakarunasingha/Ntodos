import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NtodoTitleComponent } from './ntodotitle/ntodotitle.component';
import { NtodoCreateComponent } from './ntodocreate/ntodocreate.component';
import { NtodoListComponent } from './ntodo/ntodo.component';
import { NtodoService } from './ntodo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NtodoTitleComponent, NtodoCreateComponent, NtodoListComponent],
  providers: [NtodoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
