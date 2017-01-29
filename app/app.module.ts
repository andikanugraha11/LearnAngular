import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DikaComponent } from './dika.component'; //tambahan
import { ExponentialStrengthPipe } from './dika.pipe';
import { DikaPostComponent } from './dikaPost.component';
import { DikaPostService } from './dikaPost.service';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //tambahan
  declarations: [ AppComponent, DikaComponent, ExponentialStrengthPipe, DikaPostComponent], //tambahan
  providers:	[ DikaPostService],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
