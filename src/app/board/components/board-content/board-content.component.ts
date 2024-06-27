import { Component } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-content',
  templateUrl: './board-content.component.html',
  styleUrls: ['./board-content.component.scss']
})
export class BoardContentComponent {

  public board: any;

  public lists: any[] = [];

  constructor(private boardService: BoardService, private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.route.params.subscribe((val: any) => {
      console.log(val);

      this.boardService.getSingleBoard(val.id).subscribe(res => {
        this.board = res;
      });


      this.boardService.getListsOnABoard(val.id).subscribe((res: any) => {
        this.lists = res;
        console.log(this.lists)
      })
    });
    

  }
}
