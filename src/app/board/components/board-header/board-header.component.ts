import { Component, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent {

  public editMode: boolean = false;

  @Input() board: any;

  boardName: string = '';

  constructor(private boardService: BoardService) { }

  editBoardName() {
    this.editMode = true;

  }

  submitUpdation(boardId: string, updatedData: any) {
    console.log("Updated!", updatedData);
    // this.boardService.updateABoard(boardId, updatedData);
    this.editMode = false;
  }
}
