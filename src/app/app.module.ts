import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//others
import { MatModuleModule } from './shared/mat-module/mat-module.module';
import { FooterComponent } from './shared/templating/footer/footer.component';
import { NavBarComponent } from './shared/templating/nav-bar/nav-bar.component';

//Models
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HomeComponent } from './shared/templating/home/home.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { DashboardIndexComponent } from './components/user/dashboard/dashboard-index/dashboard-index.component';
import { SupportEngineerListComponent } from './components/user/dashboard/supportEngineer/support-engineer-list/support-engineer-list.component';
import { SupportEngineerCreateComponent } from './components/user/dashboard/supportEngineer/support-engineer-create/support-engineer-create.component';

//Services
import { IspPackageService } from './services/page/ispPackage.service';
import { CityService } from './services/page/city.service';
import { AreaService } from './services/page/area.service';


import { CityCreateComponent } from './components/user/dashboard/city/city-create/city-create.component';
import { CityListComponent } from './components/user/dashboard/city/city-list/city-list.component';
import { AreaListComponent } from './components/user/dashboard/area/area-list/area-list.component';
import { AreaCreateComponent } from './components/user/dashboard/area/area-create/area-create.component';
import { RoleCreateComponent } from './components/user/dashboard/role/role-create/role-create.component';
import { RoleListComponent } from './components/user/dashboard/role/role-list/role-list.component';
import { UserCreateComponent } from './components/user/dashboard/user/user-create/user-create.component';
import { UserListComponent } from './components/user/dashboard/user/user-list/user-list.component';
import { IspPackageListComponent } from './components/user/dashboard/ispPackage/isp-package-list/isp-package-list.component';
import { IspPackageCreateComponent } from './components/user/dashboard/ispPackage/isp-package-create/isp-package-create.component';
import { InvoiceComponent } from './components/payment/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    AboutPageComponent,
    ContactPageComponent,
    FaqPageComponent,
    IspPackageListComponent,
    IspPackageCreateComponent,
    DashboardIndexComponent,
    SupportEngineerListComponent,
    SupportEngineerCreateComponent,
    CityCreateComponent,
    CityListComponent,
    AreaListComponent,
    AreaCreateComponent,
    RoleCreateComponent,
    RoleListComponent,
    UserCreateComponent,
    UserListComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModuleModule
  ],
  providers: [
    IspPackageService,
    CityService,
    AreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
