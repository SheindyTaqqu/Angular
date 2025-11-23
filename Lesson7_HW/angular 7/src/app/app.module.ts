import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app';
import { Drivers } from './components/drivers/drivers';

// @NgModule({
//   declarations: [App, Drivers], // הוסף את Drivers כאן
//   imports: [BrowserModule, HttpClientModule],
//   bootstrap: [App]
// })
// export class AppModule {}
@NgModule({
  imports: [BrowserModule, HttpClientModule, App, Drivers],
  bootstrap: [App]
})
export class AppModule {}


