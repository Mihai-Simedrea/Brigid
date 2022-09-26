import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { RouteList } from './utils/routes';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: RouteList.dashboard, pathMatch: 'full' },
  { path: RouteList.dashboard, component: DashboardComponent },
  { path: RouteList.register, component: RegisterComponent },
  { path: RouteList.login, component: LoginComponent },

  { path: RouteList.any, component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
