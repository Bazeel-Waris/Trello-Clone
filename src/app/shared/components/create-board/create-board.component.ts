import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { BoardService } from 'src/app/board/services/board.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {

  boardTitleControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  createBoard: boolean = true;

  constructor(private boardService: BoardService) { }

  @Output() closeCreateBoardCard = new EventEmitter();

  createNewBoard() {
    let boardTitle = this.boardTitleControl.value;
    this.boardService.createBoard(boardTitle).subscribe(res => {
      console.log(res)
      this.closeCreateBoardCard.emit(false);
    });
  }

  closingCreateBoardCard() {
    this.closeCreateBoardCard.emit(false);
  }
}
