import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-list-card',
  templateUrl: './add-list-card.component.html',
  styleUrls: ['./add-list-card.component.scss']
})
export class AddListCardComponent {
  @ViewChild('addListInput') addListInput!: ElementRef;
  
}
