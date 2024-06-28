import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { BoardSidenavComponent } from './components/board-sidenav/board-sidenav.component';
import { BoardContentComponent } from './components/board-content/board-content.component';
import { BoardRoutingModule } from './board-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BoardComponent,
    BoardSidenavComponent,
    BoardContentComponent,
    BoardHeaderComponent,
    BoardListComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatIconModule,
    FormsModule
  ]
})
export class BoardModule { }
