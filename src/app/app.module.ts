import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//others
import { MatModuleModule } from './shared/mat-module/mat-module.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//Models
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { UserPackageListComponent } from './components/user/dashboard/userPackage/user-package-list/user-package-list.component';
import { UserPackageCreateComponent } from './components/user/dashboard/userPackage/user-package-create/user-create.component';
import { DashboardIndexComponent } from './components/user/dashboard/dashboard-index/dashboard-index.component';
import { SupportEngineerListComponent } from './components/user/dashboard/supportEngineer/support-engineer-list/support-engineer-list.component';
import { SupportEngineerCreateComponent } from './components/user/dashboard/supportEngineer/support-engineer-create/support-engineer-create.component';
import { IspPackageService } from './services/page/ispPackage.service';

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
    UserPackageListComponent,
    UserPackageCreateComponent,
    DashboardIndexComponent,
    SupportEngineerListComponent,
    SupportEngineerCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModuleModule
  ],
  providers: [
    IspPackageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
