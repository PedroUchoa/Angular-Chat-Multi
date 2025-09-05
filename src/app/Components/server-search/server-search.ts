import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServerInterface } from '../../Interfaces/serverInterface';


@Component({
  selector: 'app-server-search',
  imports: [],
  templateUrl: './server-search.html',
  styleUrl: './server-search.css'
})
export class ServerSearch {
  @Input() servers:ServerInterface|undefined;
  @Output() addToServer = new EventEmitter<ServerInterface>();

  add(){
    this.addToServer.emit(this.servers);
  }

}
