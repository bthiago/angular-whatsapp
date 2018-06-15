import {Component, Input, OnInit} from '@angular/core';
import {WhatsappChat} from '../../classes/whatsapp-chat';

@Component({
  selector: 'app-chat',
  templateUrl: './whatsapp-chat.component.html',
  styleUrls: ['./whatsapp-chat.component.scss'],
})
export class WhatsappChatComponent implements OnInit {
  @Input() public chat;

  constructor() {
  }

  ngOnInit() {
  }

  selectConversation(event, chat: WhatsappChat) {
    console.log(chat);
  }
}
