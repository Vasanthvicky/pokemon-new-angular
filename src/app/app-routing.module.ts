import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListComponent } from 'projects/my-lib/data-list.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AutoGarageComponent } from './projects/auto-garage/auto-garage.component';
import { DemsComponent } from './projects/dems/dems.component';
import { EasyPayComponent } from './projects/easy-pay/easy-pay.component';
import { FinanceManagementSystemComponent } from './projects/finance-management-system/finance-management-system.component';
import { PmsComponent } from './projects/pms/pms.component';
import { RoadsideAssistanceComponent } from './projects/roadside-assistance/roadside-assistance.component';
import { VehicleBookingManagementSystemComponent } from './projects/vehicle-booking-management-system/vehicle-booking-management-system.component';


const routes: Routes = [

  {path:'', redirectTo: 'about-me', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'pokemon-list', component: PokemonListComponent},
  // {path: 'pokemon-view', component: PokemonViewComponent},
  // {path: '', pathMatch: 'full', redirectTo: 'List'},
  {path: 'data-list', loadComponent: () => import('../../projects/my-lib/data-list.component').then(mod => mod.DataListComponent)},
  {path: 'pokemon-view/:id', component: PokemonViewComponent},
  {path: 'projects', component: ProjectsComponent, 
  children:[
    {path: 'auto-garage', component: AutoGarageComponent},
    {path: 'dems', component: DemsComponent},
    {path: 'easy-pay', component: EasyPayComponent},
    {path: 'finance-management-system', component: FinanceManagementSystemComponent},
    {path: 'pms', component: PmsComponent},
    {path: 'roadside-assistance', component: RoadsideAssistanceComponent},
    {path: 'vehicle-booking-management-system', component: VehicleBookingManagementSystemComponent}
  ]},
  {path: 'contact', component: ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
