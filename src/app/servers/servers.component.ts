import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})

export class ServersComponent {
    addServers: boolean = false;
    serverCreation: string = "Not Yet Created";
    serverName: string = '';

    constructor() {
        setTimeout(()=>{
            this.addServers = true;
        },2000)
    }

    onCreateServer() {
        this.serverCreation = "Server was Created";
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}