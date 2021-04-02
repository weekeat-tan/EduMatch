import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { IndexComponent } from '../screens/index/index.component';
import { SignInComponent } from '../screens/sign-in/sign-in.component';
import { SignUpComponent } from '../screens/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'sign_in',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign_up',
    component: SignUpComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }