import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TaskComponent} from './task/task.component';
import { TaskFillerComponent } from './task/task-filler/task-filler.component';
import { TaskTableComponent } from './task/task-table/task-table.component';
 import { TaskTableCardsComponent } from './shared-components/cards/task-table-cards/task-table-cards.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TaskFillerComponent,
    TaskComponent,
     TaskTableComponent,
     TaskTableCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
