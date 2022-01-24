import { Component, Input } from '@angular/core';

@Component({
  selector: 'ntodo-title',
  templateUrl: './ntodotitle.component.html',
  styleUrls: ['./ntodotitle.component.css']
})
export class NtodoTitleComponent  {
  @Input() name: string;
}