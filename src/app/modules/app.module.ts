import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '../components/app/app.component';
import {MaterialModule} from './material.module';
import {WhatsappCanvasComponent} from '../components/whatsapp-canvas/whatsapp-canvas.component';
import {WhatsappChatComponent} from '../components/whatsapp-chat/whatsapp-chat.component';
import {WhatsappChatListComponent} from '../components/whatsapp-chat-list/whatsapp-chat-list.component';
import {WhatsappChatMessageComponent} from '../components/whatsapp-chat-message-list/whatsapp-chat-message.component';
import {WhatsappSearchComponent} from '../components/whatsapp-search/whatsapp-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatsappCanvasComponent,
    WhatsappChatListComponent,
    WhatsappChatComponent,
    WhatsappChatMessageComponent,
    WhatsappSearchComponent
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
