import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../../projects/my-lib/src/lib/logger.service';

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

  pokemonList() {
    this.router.navigate(['./pokemon-list']);
  }
  pokemonView() {
    this.router.navigate(['./pokemon-view']);
  }
  userDataView() {
    this.router.navigate(['./data-list'])
  }
}
