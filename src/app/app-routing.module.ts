import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashdoardComponent } from './dashdoard/dashdoard.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:DashdoardComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
