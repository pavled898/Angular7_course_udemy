<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'

})

export class ServerComponent {}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID = 10;
  serverStatus = 'offline';
  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 1e09788bf516f63e16dfa99d04b1a16d214803a4
