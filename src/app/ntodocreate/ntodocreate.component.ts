import { Component } from '@angular/core';

@Component({
  selector: 'ntodo-create',
  templateUrl: './ntodocreate.component.html',
  styleUrls: ['./ntodocreate.component.css']
})
export class NtodoCreateComponent  {
  public ntodo_create_id = "Ntodo";
  public new_ntodo = "";
  public isDisabled = false;

  addNtodo(){
    console.log("Add clicked!");
  }

}