import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../screens/index/index.component';
import { SignInComponent } from '../screens/sign-in/sign-in.component';
import { SignUpComponent } from '../screens/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'sign_in', component: SignInComponent },
  { path: 'sign_up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
