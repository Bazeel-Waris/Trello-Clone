import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  { path: '', component: MainContentComponent},
  { path: 'b', loadChildren: () => import('./board/board.module').then(m => m.BoardModule) },
  //  { path: 'boards', component: WorkspacesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
