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
      new Chat('assets/user/picture/gohan-face.jpg', 'Gohan Sayajin', new Date(), ''),
      new Chat('assets/user/picture/goku-face.jpg', 'Goku Sayajin', new Date(), ''),
      new Chat('assets/user/picture/vegeta-face.jpg', 'Vegeta Sayajin', new Date(), '')
    ];
  }

  ngOnInit() {
  }

}
