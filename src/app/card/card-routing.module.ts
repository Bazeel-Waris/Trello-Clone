import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { BoardComponent } from '../board/components/board/board.component';

const routes: Routes = [
  { path: 'id/name', component: BoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardRoutingModule { }
