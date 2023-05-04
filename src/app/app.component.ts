import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../../projects/my-lib/src/lib/logger.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(
    private router: Router,
    private loggerService: LoggerService,
  ) {
    this.loggerService.log("Hello world");
  }

  /* pokemonList() {
    this.router.navigate(['./pokemon-list']);
  }
  pokemonView() {
    this.router.navigate(['./pokemon-view']);
  }
  userDataView() {
    this.router.navigate(['./data-list'])
  } */
  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: SideNavToggle):void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }
}
