import { Component } from '@angular/core';

@Component({
  selector: 'ntodo-list',
  templateUrl: './ntodo.component.html',
  styleUrls: ['./ntodo.component.css']
})
export class NtodoListComponent  {
  public ntodo_create_id = "Ntodo";
  public new_ntodo = "";
  public isDisabled = false;
}