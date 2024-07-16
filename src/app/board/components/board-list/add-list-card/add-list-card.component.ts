import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { CardService } from 'src/app/board/services/card.service';

@Component({
  selector: 'app-add-list-card',
  templateUrl: './add-list-card.component.html',
  styleUrls: ['./add-list-card.component.scss']
})
export class AddListCardComponent {
  @ViewChild('addCardInput') 
  addCardInput!: ElementRef;
  
  @Output() 
  closeAddCard = new EventEmitter();

  @Output() 
  newInsertedCard = new EventEmitter();

  @Input() 
  listId: string = '';

  constructor(private cardService: CardService) {}

  addCardToList() {
    let cardName = this.addCardInput.nativeElement.value;

    if(cardName === '') {
      this.closeAddCard.emit(false);
    } else {
      this.cardService.createCard(this.listId, this.addCardInput.nativeElement.value).subscribe(res => {
        this.newInsertedCard.emit(res);
        this.addCardInput.nativeElement.value = '';
      })
    }
  }

  closeAddCardField() {
    this.closeAddCard.emit(false);
  }
}
