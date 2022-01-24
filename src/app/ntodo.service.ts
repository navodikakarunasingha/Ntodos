import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class NtodoService {
  //private _url: string ="/assets/data/ntodos.json";
  constructor() {}

  getNtodos(){
    return [
      {"ntodo":"buy a cup of tea"}, 
      {"ntodo":"sleep for 5 min"}, 
      {"ntodo":"create an app"}
    ];
  }
}
