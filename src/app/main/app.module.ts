import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { TestComponent } from '../t/t.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {
      path: 'testMe',
      component: TestComponent
    }])
  ],
  declarations: [
    AppComponent,
    TestComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}


