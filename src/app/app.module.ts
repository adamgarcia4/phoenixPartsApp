import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { PartViewComponent } from './part-view/part-view.component';
import { PartCommentComponent } from './part-comment/part-comment.component';
import { PartMachineComponent } from './part-machine/part-machine.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    PartViewComponent,
    PartCommentComponent,
    PartMachineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
