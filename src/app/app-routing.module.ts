import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'board', loadChildren: () => import('./board/board.module').then(m => m.BoardModule) },
  //  { path: '', component: MainContentComponent },
  //  { path: 'boards', component: WorkspacesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
