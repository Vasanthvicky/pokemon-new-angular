import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(
    private router: Router
  ) {}

  pokemonList() {
    this.router.navigate(['./pokemon-list']);
  }
  pokemonView() {
    this.router.navigate(['./pokemon-view']);
  }
}
