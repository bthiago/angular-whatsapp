import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './whatsapp-chat.component.html',
  styleUrls: ['./whatsapp-chat.component.scss'],
})
export class WhatsappChatComponent implements OnInit {
  @Input() public chat;

  constructor() { }

  ngOnInit() {
  }

}
