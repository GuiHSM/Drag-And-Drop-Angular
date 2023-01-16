import { CdkDrag, CdkDropList, CdkDropListGroup, CdkDragStart, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, NgModule, ViewChild } from '@angular/core';
import { ILesson } from '../interfaces/ILesson';


/* @Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
}) */


/**
 * @title Drag&Drop connected sorting
 */
@Component({
  /* selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'], */
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class Campanha {
  estoque = ['Medicamento 1','Medicamento 2','Medicamento 3','Medicamento 4','Medicamento 5','Medicamento 6','Medicamento 7','Medicamento 8','Medicamento 9','Medicamento 10','Medicamento 11','Medicamento 12'];

  prateleira = [''];
  prateleira11 = [''];
  prateleira12 = [''];
  prateleira13 = [''];
  prateleira14 = [''];
  prateleira21 = [''];
  prateleira22 = [''];
  prateleira23 = [''];
  prateleira24 = [''];
  prateleira31 = [''];
  prateleira32 = [''];
  prateleira33 = [''];
  prateleira34 = [''];
  prateleira41 = [''];
  prateleira42 = [''];
  prateleira43 = [''];
  prateleira44 = [''];


  drop(event: CdkDragDrop<string[]>) {
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

/* 
export class DragAndDropComponent {
  lessons1 = [[
    {
      id: 120,
      'description': 'Item 1',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    }, {
      id: 122,
      'description': 'Item 2',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },
  ], [
    {
      id: 122,
      'description': 'Item 3',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },],
  [{
    id: 123,
    'description': 'Item 4',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 124,
    'description': 'Item 5',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 125,
    'description': 'Item 6',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },]]
  lessons2 = [[
    {
      id: 120,
      'description': 'Item 7',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    }, {
      id: 122,
      'description': 'Item 8',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },
  ], [
    {
      id: 122,
      'description': 'Item 9',
      'duration': '4.17',
      'segNo': 1,
      courseId: 11
    },],
  [{
    id: 123,
    'description': 'Item 10',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 124,
    'description': 'Item 11',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },], [{
    id: 125,
    'description': 'Item 12',
    'duration': '4.17',
    'segNo': 1,
    courseId: 11
  },]]
    ;
  colunas1 = [...Array(this.lessons1.length).keys()]//0,1,2,3
  get1(val: number) {
    if (val == 0) {
      return 2;
    }
    return val - 1;
  }
  colunas2 = [...Array(this.lessons2.length).keys()]//0,1,2,3
  get2(val: number) {
    if (val == 0) {
      return 2;
    }
    return val - 1;
  }
  drop(event: CdkDragDrop<ILesson[]>) {
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
  newItems = ['Item 0', 'Item 1', 'Item 2', 'Item 3'];
  activeItems = ['Item 4'];
  doneItems = ['Item 5', 'Item 6', 'Item 7'];
}



 */