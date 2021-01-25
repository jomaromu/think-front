import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { HomeComponent } from './pages/en/home/home.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  // { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
