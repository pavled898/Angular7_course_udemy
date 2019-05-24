import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  allowAddServer = false;
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 3000);
   }
>>>>>>> 1e09788bf516f63e16dfa99d04b1a16d214803a4

  ngOnInit() {
  }

}
