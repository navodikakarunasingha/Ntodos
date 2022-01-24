import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INtodo } from '../assets/data/ntodo';

@Injectable()
export class NtodoService {
  private _url: string ="/assets/data/ntodos.json";
  constructor(private http: HttpClient) {}

  getNtodos(): Observable<INtodo[]>{
    return this.http.get<INtodo[]>(this._url);
  }
}
