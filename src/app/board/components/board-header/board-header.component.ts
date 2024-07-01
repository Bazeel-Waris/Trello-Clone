import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.scss']
})
export class BoardHeaderComponent {

  public editMode: boolean = false;

  @ViewChild('boardName') boardName!: ElementRef;
  
  @Input() board: any;

  constructor(private boardService: BoardService) { }

  editBoardName() {
    this.editMode = true;
  }

  submitUpdation(boardId: string, updatedData: string) {
    this.boardService.updateABoard(boardId, updatedData).subscribe(res => {
      console.log(res)
      this.board = res;
      this.editMode = false;
    });
  }

  ngAfterViewChecked() {
    if (this.editMode && this.boardName) {
        const inputElement = this.boardName.nativeElement;
        console.log(this.boardName.nativeElement.style.width = (this.boardName.nativeElement.value.length + 2) + 'ch');
        inputElement.focus();
        inputElement.select();
    }
}
}
