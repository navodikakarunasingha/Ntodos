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
import { environment } from '../environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
//import { AngularFireModule } from 'angularfire2';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NtodoTitleComponent, NtodoCreateComponent, NtodoListComponent],
  providers: [NtodoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
