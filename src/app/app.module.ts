import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}