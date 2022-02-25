import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CheckUserGuard } from './guards/check-user.guard';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: 'login', component: FormularioComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule),
    canActivate: [CheckUserGuard],
    canLoad: [CheckUserGuard] },
  {
    path: '**', component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
