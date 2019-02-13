import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoDataService } from './components/todo/todo-data.service';
import { TodoEntryComponent } from './components/todo/todo-entry/todo-entry.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    TodoComponent,
    TodoListComponent,
    TodoEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
