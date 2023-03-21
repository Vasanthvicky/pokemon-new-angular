import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';


const routes: Routes = [
  {path: 'pokemon-list', component: PokemonListComponent},
  // {path: 'pokemon-view', component: PokemonViewComponent},
  {path: 'pokemon-view/:id', component: PokemonViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
