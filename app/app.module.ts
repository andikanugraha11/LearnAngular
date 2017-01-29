import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DikaComponent } from './dika.component'; //tambahan
import { ExponentialStrengthPipe } from './dika.pipe';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //tambahan
  declarations: [ AppComponent, DikaComponent, ExponentialStrengthPipe], //tambahan
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
