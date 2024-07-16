import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { BoardSidenavComponent } from './components/board-sidenav/board-sidenav.component';
import { BoardContentComponent } from './components/board-content/board-content.component';
import { BoardRoutingModule } from './board-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BoardHeaderComponent } from './components/board-header/board-header.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddListCardComponent } from './components/board-list/add-list-card/add-list-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CardModule } from '../card/card.module';
// import { CreateBoardComponent } from './components/create-board/create-board.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BoardComponent,
    BoardSidenavComponent,
    BoardContentComponent,
    BoardHeaderComponent,
    BoardListComponent,
    AddListCardComponent,
    // CreateBoardComponent,

  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatIconModule,
    FormsModule,
    CardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    SharedModule
  ]
})
export class BoardModule { }
