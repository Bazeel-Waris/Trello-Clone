import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-card-modal',
  templateUrl: './task-card-modal.component.html',
  styleUrls: ['./task-card-modal.component.scss']
})
export class TaskCardModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: MatDialog) {}
}
