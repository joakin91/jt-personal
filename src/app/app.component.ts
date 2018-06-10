import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuItems: MenuItem[];

  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
        { name: "Home", route: "/home" },
        { name: "About me", route: "/aboutme" }
    ];
  }

  close() {
    this.sidenavActions.emit({ action: 'sideNav', params: ['hide'] });
  }

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
}

export interface MenuItem {
  name: string;
  route: string;
}
