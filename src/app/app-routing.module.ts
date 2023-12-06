import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityCreateComponent } from './components/city/city-create/city-create.component';
import { CityIndexComponent } from './components/city/city-index/city-index.component'
import { PackageIndexComponent } from './components/package/package-index/package-index.component'
import { ComplainIndexComponent } from './components/complain/complain-index/complain-index.component'
import { LoginComponent } from './components/user/login/login.component'
import { DashboardComponent } from './components/user/dashboard/dashboard.component'


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'city-create', component: CityCreateComponent },
  { path: 'city', component: CityIndexComponent },
  { path: 'package', component: PackageIndexComponent },
  { path: 'complain', component: ComplainIndexComponent },
  { path: 'dashboard', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
