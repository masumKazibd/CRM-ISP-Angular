import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//City
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityEditComponent } from './components/city/city-edit/city-edit.component';
import { CityIndexComponent } from './components/city/city-index/city-index.component';

//Area
import { AreaCreateComponent } from './components/area/area-create/area-create.component';
import { AreaEditComponent } from './components/area/area-edit/area-edit.component';
import { AreaIndexComponent } from './components/area/area-index/area-index.component';

//Package
import { PackageCreateComponent } from './components/package/package-create/package-create.component';
import { PackageEditComponent } from './components/package/package-edit/package-edit.component';
import { PackageIndexComponent } from './components/package/package-index/package-index.component';

//Complain
import { ComplainCreateComponent } from './components/complain/complain-create/complain-create.component';
import { ComplainEditComponent } from './components/complain/complain-edit/complain-edit.component';
import { ComplainIndexComponent } from './components/complain/complain-index/complain-index.component';

//others
import { MatModuleModule } from './shared/mat-module/mat-module.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//Models
import { CityService } from './services/city.service';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    CityCreateComponent,
    CityEditComponent,
    CityIndexComponent,
    AreaCreateComponent,
    AreaEditComponent,
    AreaIndexComponent,
    PackageCreateComponent,
    PackageEditComponent,
    PackageIndexComponent,
    ComplainCreateComponent,
    ComplainEditComponent,
    ComplainIndexComponent,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModuleModule
  ],
  providers: [
    CityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
