import { Component } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drag-and-drop';
}
