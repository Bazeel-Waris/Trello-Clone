import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CreateBoardComponent,
  ],
  imports: [
    // CommonModule
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NgIf
  ],
  exports:[
    CreateBoardComponent
  ]
})
export class SharedModule { }
