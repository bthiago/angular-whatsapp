import {Component, OnInit} from '@angular/core';
import {Chat} from '../../classes/chat';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  public chats: Chat[];

  constructor() {
    this.chats = [
      new Chat('', 'Gohan Sayajin', new Date(), ''),
      new Chat('', 'Goku Sayajin', new Date(), ''),
      new Chat('', 'Vegeta Sayajin', new Date(), '')
    ];
  }

  ngOnInit() {
  }

}
