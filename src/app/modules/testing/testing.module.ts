import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestingComponent } from './testing.component';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule } from './testing.routing';

@NgModule({
  declarations: [
    TestingComponent
  ],
  imports: [
    CommonModule,

    TestingRoutingModule
  ],
  providers: [],
  bootstrap: [TestingComponent]
})
export class TestingModule { }
