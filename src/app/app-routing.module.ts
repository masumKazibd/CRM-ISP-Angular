import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityIndexComponent } from './components/city/city-index/city-index.component'
import { PackageIndexComponent } from './components/package/package-index/package-index.component'
import { ComplainIndexComponent } from './components/complain/complain-index/complain-index.component'
import { LoginComponent } from './components/user/login/login.component'
import { DashboardComponent } from './components/user/dashboard/dashboard.component'
import {AreaIndexComponent} from './components/area/area-index/area-index.component'
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'city', component: CityIndexComponent },
    { path: 'city-create', component: CityCreateComponent },
    { path: 'packages', component: PackageIndexComponent },
    { path: 'complain', component: ComplainIndexComponent },
    { path: 'area', component: AreaIndexComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [DashboardComponent]