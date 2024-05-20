import { Component, inject } from '@angular/core';
import { BoardService } from 'src/app/Services/board.service';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss']
})
export class WorkspacesComponent {
     boardService = inject(BoardService);

     ngOnInit() {

          this.boardService.getAllBoards().subscribe(res => {

               console.log(res);
          })
          
     }
}
