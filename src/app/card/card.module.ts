import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardModalComponent } from './components/task-card-modal/task-card-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { CardRoutingModule } from './card-routing.module';



@NgModule({
  declarations: [
    TaskCardModalComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    MatIconModule
  ]
})
export class CardModule { }
