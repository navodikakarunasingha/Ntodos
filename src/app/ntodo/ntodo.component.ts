import { Component, OnInit } from '@angular/core';
import { NtodoService } from '../ntodo.service';

@Component({
  selector: 'ntodo-list',
  templateUrl: './ntodo.component.html',
  styleUrls: ['./ntodo.component.css']
})
export class NtodoListComponent implements OnInit  {
  public isNtodoExist = true;
  public Ntodos = [];
  constructor(private _ntodoService: NtodoService) {}
  ngOnInit() {
    this.Ntodos = this._ntodoService.getNtodos();
  }
}