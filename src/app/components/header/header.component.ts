import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  createBoardFlag: boolean = true;

  closingCreateBoardCard(event: any) {
    this.createBoardFlag = event;
  }
}
