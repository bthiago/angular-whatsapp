import {Component, OnInit} from '@angular/core';
import {ChatModel} from '../../classes/ChatClass';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  public chats: ChatModel[];

  constructor() {
    this.chats = [
      new ChatModel('', 'Gohan Sayajin', new Date(), ''),
      new ChatModel('', 'Goku Sayajin', new Date(), ''),
      new ChatModel('', 'Vegeta Sayajin', new Date(), '')
    ];
  }

  ngOnInit() {
  }

}
