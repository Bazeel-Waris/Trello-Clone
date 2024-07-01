import { Component, ElementRef, ViewChild } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-board-content',
  templateUrl: './board-content.component.html',
  styleUrls: ['./board-content.component.scss']
})
export class BoardContentComponent {

  public board: any;

  public addList: boolean = false;

  @ViewChild('addListInput') addListInput!: ElementRef;

  public lists: any[] = [];

  constructor(private boardService: BoardService, private route: ActivatedRoute, private listService: ListService) {}

  ngOnInit() {
    this.route.params.subscribe((val: any) => {

      this.boardService.getSingleBoard(val.id).subscribe(res => {
        this.board = res;
      });

      this.boardService.getListsOnABoard(val.id).subscribe((res: any) => {
        this.lists = res;
        console.log(this.lists)
      });

    });
  }

  addName() {
    this.addList = true;
  }

  createList() {
    let listName = this.addListInput.nativeElement.value;

    this.listService.createList(this.board.id, listName).subscribe(res => {
      this.lists.push(res);
      this.addListInput.nativeElement.value = '';
    })
  }

  ngAfterViewChecked() {
    if(this.addListInput) {
      this.addListInput.nativeElement.focus();
    }
  }
}
