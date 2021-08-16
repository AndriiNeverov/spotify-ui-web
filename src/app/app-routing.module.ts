import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  {
    path: 'home', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
