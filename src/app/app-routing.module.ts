import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { LoginComponent } from './components/user/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent  } from './components/pages/faq-page/faq-page.component';
import { ContactPageComponent  } from './components/pages/contact-page/contact-page.component';

//for dashboard
import { DashboardComponent } from './components/user/dashboard/dashboard.component'
import { DashboardIndexComponent } from './components/user/dashboard/dashboard-index/dashboard-index.component';


import { ComplainIndexComponent } from './components/user/dashboard/complain/complain-index/complain-index.component';
import { ComplainCreateComponent } from './components/user/dashboard/complain/complain-create/complain-create.component';
import {SupportEngineerListComponent} from './components/user/dashboard/supportEngineer/support-engineer-list/support-engineer-list.component';
import {SupportEngineerCreateComponent} from './components/user/dashboard/supportEngineer/support-engineer-create/support-engineer-create.component';
import { CityListComponent } from './components/user/dashboard/city/city-list/city-list.component';
import { CityCreateComponent } from './components/user/dashboard/city/city-create/city-create.component';
import { UserPackageListComponent } from './components/user/dashboard/userPackage/user-package-list/user-package-list.component';
import { UserPackageCreateComponent } from './components/user/dashboard/userPackage/user-package-create/user-package-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {path: 'about', component: AboutPageComponent},
  {path: 'faq', component: FaqPageComponent},
  {path: 'contact', component: ContactPageComponent},
  //
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: '', component: DashboardIndexComponent},
    { path: 'package-create', component: UserPackageCreateComponent },
    { path: 'packages', component: UserPackageListComponent },
    { path: 'complain', component: ComplainIndexComponent },
    { path: 'complain-create', component: ComplainCreateComponent },
    { path: 'support-engineer', component: SupportEngineerListComponent },
    { path: 'support-engineer-create', component: SupportEngineerCreateComponent },
    { path: 'city', component: CityListComponent},
    { path: 'city-create', component: CityCreateComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [DashboardComponent]