import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from '../login/login-view/login-view.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginViewComponent }
];
@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ],
  ],
  declarations: [],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
