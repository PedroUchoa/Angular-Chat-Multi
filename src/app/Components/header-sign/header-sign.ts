import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-sign',
  imports: [],
  templateUrl: './header-sign.html',
  styleUrl: './header-sign.css'
})
export class HeaderSign {
  @Input() type:string = ''
}
