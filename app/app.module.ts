import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DikaComponent } from './dika.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, DikaComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
