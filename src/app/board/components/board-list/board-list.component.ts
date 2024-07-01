import { Component, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent {

  @Input() list: any;

  public cards: any[] = [];

  constructor(private boardService: BoardService) {}

  ngOnInit() {
    this.boardService.getCardsInAList(this.list.id).subscribe((res: any) => {
      this.cards = res;
    });
  }

  listOptions() {
    console.log('list options are displaying!')
  }
}
