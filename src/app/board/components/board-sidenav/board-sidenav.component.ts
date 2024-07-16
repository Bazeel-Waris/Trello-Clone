import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  public createBoardFlag: boolean = false;

  private clickListener!: any;

  // @ViewChild('createBoardCard') createBoardCard = ElementRef;
  
  constructor(private boardService: BoardService, private router: Router, private elRef: ElementRef, private rendrer: Renderer2) { }

  ngOnInit() {
    this.boardService.getAllBoards().subscribe((res: any) => {
      this.availableBoards = res;
      console.log(this.availableBoards);
    });

    console.log(this.rendrer)
    this.clickListener = this.rendrer.listen('document', 'click', (event) => {
      this.onDocumentClick(event);
    });
  }

  private onDocumentClick(event: Event) {
    console.log(this.elRef.nativeElement)
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.createBoardFlag = false;
    }
  }

  ngOnDestroy() {
    if (this.clickListener) {
      this.clickListener();
    }
  }

  closingCreateBoardCard(event: any) {
    console.log(event)
    this.createBoardFlag = event;
  }
  // Open Board By Calling API
  openBoard(board: any) {
    // this.router.navigate(['/b', board.shortLink, board.name.toLowerCase()]);
  }
}
