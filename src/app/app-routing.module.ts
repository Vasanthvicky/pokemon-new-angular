import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from 'projects/my-lib/data-list.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';


const routes: Routes = [
  {path: 'pokemon-list', component: PokemonListComponent},
  // {path: 'pokemon-view', component: PokemonViewComponent},
  {path: '', pathMatch: 'full', redirectTo: 'List'},
  {path: 'data-list', loadComponent: () => import('../../projects/my-lib/data-list.component').then(mod => mod.DataListComponent)},
  {path: 'pokemon-view/:id', component: PokemonViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
