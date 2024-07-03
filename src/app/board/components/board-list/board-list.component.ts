import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ListService } from '../../services/list.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskCardModalComponent } from '../../../card/components/task-card-modal/task-card-modal.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent {

  @Input() 
  list: any;

  public cards: any[] = [];

  public addCard: boolean = false;

  @ViewChild('editListInput') 
  editListInput!: ElementRef;

  public editList: boolean = false;

  constructor(public dialog: MatDialog, private boardService: BoardService, private listService: ListService) {}

  openTaskCard() {
    this.dialog.open(TaskCardModalComponent, {
      width: '60%',
      data: {
        animal: 'panda',
      },
    });
  }
  ngOnInit() {
    this.boardService.getCardsInAList(this.list.id).subscribe((res: any) => {
      this.cards = res;
    });
  }

  ngAfterViewChecked() {
    if(this.editListInput) {
      this.editListInput.nativeElement.value = this.list.name;
      this.editListInput.nativeElement.focus();
      this.editListInput.nativeElement.select();
    }
  }

  listOptions() {
    console.log('list options are displaying!')
  }

  editListName() {
    this.editList = true;
  }

  submitListUpdation(listId: string) {
    
      console.log(listId);
    this.listService.updateList(listId, this.editListInput.nativeElement.value).subscribe(res => {
      this.list = res;
      console.log(this.list);
      this.editList = false;
    });
  }
 
  openAddCardField() {
    this.addCard = !this.addCard;
  }

  newInsertedCard(event: any) {
    this.cards.push(event);
  }

  closeAddCardField(event: any) {
    this.addCard = event;
  }
}
