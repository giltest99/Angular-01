import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KonkatComponent } from './konkat/konkat.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'konkat', component: KonkatComponent, title: 'Konkat' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
