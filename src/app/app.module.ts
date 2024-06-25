import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './components/board/board.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './components/board/sidenav/sidenav.component';
import { LayoutService } from './Services/layout.service';
import { BoardContentComponent } from './components/board/board-content/board-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    WorkspacesComponent,
    ActionButtonsComponent,
    BoardComponent,
    SidenavComponent,
    BoardContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule, 
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [
    // LayoutService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
