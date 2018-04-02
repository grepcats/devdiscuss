import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostNewComponent } from './post-new/post-new.component';
import { ListPostComponent } from './list-post/list-post.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostNewComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
