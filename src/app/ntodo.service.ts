import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INtodo } from './ntodo';


@Injectable()
export class NtodoService {
  //private _url: string ="/assets/data/ntodos.json";
 private _url: string ="https://jsonplaceholder.typicode.com/posts/1/comments";
  constructor(private http: HttpClient) {}

  getNtodos(): Observable<INtodo[]>{
    return this.http.get<INtodo[]>(this._url);
    console.log("hi");
    /*return [
      {"ntodo":"buy a cup of tea"}, 
      {"ntodo":"sleep for 5 min"}, 
      {"ntodo":"create an app"}
    ];*/
  }
}
