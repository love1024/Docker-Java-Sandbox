import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CodemirrorModule,
    SpinnerCircularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
