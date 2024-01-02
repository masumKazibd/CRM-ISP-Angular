import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { LoginComponent } from './components/user/login/login.component'
import { HomeComponent } from './shared/templating/home/home.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';

//for dashboard
import { DashboardComponent } from './components/user/dashboard/dashboard.component'
import { DashboardIndexComponent } from './components/user/dashboard/dashboard-index/dashboard-index.component';

//Child of dashboard
import { SupportEngineerListComponent } from './components/user/dashboard/supportEngineer/support-engineer-list/support-engineer-list.component';
import { SupportEngineerCreateComponent } from './components/user/dashboard/supportEngineer/support-engineer-create/support-engineer-create.component';
import { CityListComponent } from './components/user/dashboard/city/city-list/city-list.component';
import { CityCreateComponent } from './components/user/dashboard/city/city-create/city-create.component';
import { AreaListComponent } from './components/user/dashboard/area/area-list/area-list.component';
import { AreaCreateComponent } from './components/user/dashboard/area/area-create/area-create.component';
import { RoleListComponent } from './components/user/dashboard/role/role-list/role-list.component';
import { RoleCreateComponent } from './components/user/dashboard/role/role-create/role-create.component';
import { UserCreateComponent } from './components/user/dashboard/user/user-create/user-create.component';
import { UserListComponent } from './components/user/dashboard/user/user-list/user-list.component';
import { IspPackageCreateComponent } from './components/user/dashboard/ispPackage/isp-package-create/isp-package-create.component';
import { IspPackageListComponent } from './components/user/dashboard/ispPackage/isp-package-list/isp-package-list.component';
import { InvoiceComponent } from './components/payment/invoice/invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'contact', component: ContactPageComponent },
  //
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: DashboardIndexComponent },
      { path: 'package-create', component: IspPackageCreateComponent },
      { path: 'packages', component: IspPackageListComponent },
      { path: 'city', component: CityListComponent },
      { path: 'city-create', component: CityCreateComponent },
      { path: 'area', component: AreaListComponent },
      { path: 'area-create', component: AreaCreateComponent },
      { path: 'support-engineer', component: SupportEngineerListComponent },
      { path: 'support-engineer-create', component: SupportEngineerCreateComponent },
      { path: 'role', component: RoleListComponent },
      { path: 'role-create', component: RoleCreateComponent },
      { path: 'user-create', component: UserCreateComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'invoice', component: InvoiceComponent },
      { path: 'invoice/:id', component: InvoiceComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [DashboardComponent]