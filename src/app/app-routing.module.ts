import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspacesComponent } from './components/workspaces/workspaces.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
     { path: '', component: MainContentComponent },
     { path: 'boards', component: WorkspacesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
