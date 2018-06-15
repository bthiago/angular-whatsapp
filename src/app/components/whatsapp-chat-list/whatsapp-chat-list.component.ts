import {Component, OnInit} from '@angular/core';
import {WhatsappChat} from '../../classes/whatsapp-chat';

@Component({
  selector: 'app-chat-list',
  templateUrl: './whatsapp-chat-list.component.html',
  styleUrls: ['./whatsapp-chat-list.component.scss'],
})
export class WhatsappChatListComponent implements OnInit {
  public chats: WhatsappChat[];

  constructor() {
    this.chats = [
      new WhatsappChat('assets/user/picture/gohan-face.jpg', 'Gohan Sayajin', new Date(), ''),
      new WhatsappChat('assets/user/picture/goku-face.jpg', 'Goku Sayajin', new Date(), ''),
      new WhatsappChat('assets/user/picture/vegeta-face.jpg', 'Vegeta Sayajin', new Date(), '')
    ];
  }

  ngOnInit() {
  }

}
