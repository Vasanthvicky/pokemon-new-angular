import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { DataListComponent } from 'projects/my-lib/data-list.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonViewComponent,
    ProfileInfoComponent,
    TopNavigationComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MyLibModule,
    DataListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
