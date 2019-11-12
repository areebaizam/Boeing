import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ { path: '', pathMatch: 'full' , redirectTo: 'home' }
  , { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
  , { path: '404', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
  , { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) }
  , { path: '**', redirectTo: '404' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
