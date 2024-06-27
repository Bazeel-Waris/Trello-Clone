import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { BoardContentComponent } from './components/board-content/board-content.component';

const routes: Routes = [
    // { path: '', component: BoardComponent },
    { path: ':id/:name', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
