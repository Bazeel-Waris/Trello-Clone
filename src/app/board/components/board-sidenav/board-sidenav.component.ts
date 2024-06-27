import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-sidenav',
  templateUrl: './board-sidenav.component.html',
  styleUrls: ['./board-sidenav.component.scss']
})
export class BoardSidenavComponent implements OnInit {
 
  public availableBoards: any[] = [];

  public board: any;

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.boardService.getAllBoards().subscribe((res: any) => {
      this.availableBoards = res;
      console.log(this.availableBoards);
    });
  }

  // Open Board By Calling API
  openBoard(board: any) {
    this.router.navigate(['/b', board.shortLink, board.name.toLowerCase()]);
  }
}
