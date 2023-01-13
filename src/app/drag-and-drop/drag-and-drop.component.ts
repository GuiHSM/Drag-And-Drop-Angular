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
    {
      id: 120,
      'description': 'Introduction to Angular Material',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },
    {
      id: 121,
      'description': 'Navigation and Containers',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },
  ],[
    {
      id: 122,
      'description': 'Data tables',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },]];
  drop(event: CdkDragDrop<ILesson[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event.previousContainer.data);
      console.log(event.container.data);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
