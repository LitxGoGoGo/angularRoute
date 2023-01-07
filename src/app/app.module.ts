import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoDeleteComponent } from './pages/demo-delet/demo-delete.component';
import {PushDeleteModule} from "./directive/push-delete/push-delete.module";



// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    DemoDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PushDeleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
