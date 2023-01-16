import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Campanha } from './drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  // {path: 'drag-and-drop-example', component: DragAndDropComponent},
  {path: 'drag-and-drop-example', component: Campanha},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }