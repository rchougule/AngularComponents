import { Component } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html'
})

export class ServersComponent {
    addServers: boolean = false;

    constructor() {
        setTimeout(()=>{
            this.addServers = true;
        },2000)
    }
}