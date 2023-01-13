import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ILesson } from '../interfaces/ILesson';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})

export class DragAndDropComponent {
  lessons = [[
      'Introduction to Angular Material',
      'Data tables',
  ],[
      'Data tables',
    ],
  [
      'Navigation and Containers',
    ]];
  colunas = [...Array(4).keys()]
  get(val:number){
    if(val==0){
      return 2;
    }
    return val-1;
  }
  drop(event: CdkDragDrop<string[]>){
    console.log(event.previousContainer.id);
    console.log(event.container.id);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
