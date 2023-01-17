import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from '../app/routing.module';
import { MatListModule } from '@angular/material/list'; 

import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
// import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { Campanha } from './drag-and-drop/drag-and-drop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    // DragAndDropComponent
    Campanha

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    DragDropModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
