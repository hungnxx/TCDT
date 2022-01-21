import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { HomeComponent } from './containers/home/home.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { BoardUserComponent } from './containers/board-user/board-user.component';
import { BoardModeratorComponent } from './containers/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './containers/board-admin/board-admin.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },
  { path: 'admin', component: LayoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
