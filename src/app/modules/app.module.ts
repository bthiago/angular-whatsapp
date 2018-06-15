import {BrowserModule} from '@angular/platform-browser';
import {ChangeDetectorRef, NgModule} from '@angular/core';

import {AppComponent} from '../components/app/app.component';
import {MaterialModule} from './material.module';
import {WhatsappCanvasComponent} from '../components/whatsapp-canvas/whatsapp-canvas.component';
import {WhatsappFriendComponent} from '../components/whatsapp-friend/whatsapp-friend.component';
import {WhatsappFriendListComponent} from '../components/whatsapp-friend-list/whatsapp-friend-list.component';
import {WhatsappFriendMessageComponent} from '../components/whatsapp-friend-message-list/whatsapp-friend-message.component';
import {WhatsappSearchComponent} from '../components/whatsapp-search/whatsapp-search.component';
import {FriendService} from '../services/friend.service';

@NgModule({
  declarations: [
    AppComponent,
    WhatsappCanvasComponent,
    WhatsappFriendListComponent,
    WhatsappFriendComponent,
    WhatsappFriendMessageComponent,
    WhatsappSearchComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [FriendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
