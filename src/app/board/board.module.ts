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
import { AddListCardComponent } from './components/board-list/add-list-card/add-list-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    BoardComponent,
    BoardSidenavComponent,
    BoardContentComponent,
    BoardHeaderComponent,
    BoardListComponent,
    AddListCardComponent,

  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatIconModule,
    FormsModule,
    CardModule,
    MatDialogModule
  ]
})
export class BoardModule { }
