import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SquareComponentComponent } from './components/square-component/square-component.component';
import { BoardComponentComponent } from './components/board-component/board-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponentComponent,
    BoardComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
