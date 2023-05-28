import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataListComponent } from 'projects/my-lib/data-list.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterComponent } from './router/router.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { FullPageLoaderModule } from './full-page-loader/full-page-loader.module';
import { AutoGarageComponent } from './projects/auto-garage/auto-garage.component';
import { VehicleBookingManagementSystemComponent } from './projects/vehicle-booking-management-system/vehicle-booking-management-system.component';
import { RoadsideAssistanceComponent } from './projects/roadside-assistance/roadside-assistance.component';
import { PmsComponent } from './projects/pms/pms.component';
import { FinanceManagementSystemComponent } from './projects/finance-management-system/finance-management-system.component';
import { EasyPayComponent } from './projects/easy-pay/easy-pay.component';
import { DemsComponent } from './projects/dems/dems.component';
import { ProjectsRoutingModule } from './projects/projects-routing.module';
import { ProjectListViewComponent } from './projects/project-list-view/project-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonViewComponent,
    ProfileInfoComponent,
    TopNavigationComponent,
    SideNavComponent,
    RouterComponent,
    ProjectsComponent,
    AboutMeComponent,
    ContactComponent,
    AutoGarageComponent,
    VehicleBookingManagementSystemComponent,
    RoadsideAssistanceComponent,
    PmsComponent,
    FinanceManagementSystemComponent,
    EasyPayComponent,
    DemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MyLibModule,
    DataListComponent,
    FontAwesomeModule,
    FullPageLoaderModule,
    ProjectsRoutingModule
  ],
  providers: [ProjectListViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
