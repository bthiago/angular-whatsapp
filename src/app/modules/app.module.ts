import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '../components/app/app.component';
import {MaterialModule} from './material.module';
import {CanvasComponent} from '../components/canvas/canvas.component';
import {ChatComponent} from '../components/chat/chat.component';
import {ChatListComponent} from '../components/chat-list/chat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ChatListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
