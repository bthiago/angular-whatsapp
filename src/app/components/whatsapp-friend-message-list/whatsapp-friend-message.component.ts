import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../classes/user';
import {FriendService} from '../../services/friend.service';

@Component({
  selector: 'app-whatsapp-friend-message-list',
  templateUrl: './whatsapp-friend-message.component.html',
  styleUrls: ['./whatsapp-friend-message.component.scss']
})
export class WhatsappFriendMessageComponent implements OnInit {
  public friend: User;

  @ViewChild('whatsappMessageRoll') whatsappMessageRoll: ElementRef;

  constructor(private _friendService: FriendService) {
  }

  ngOnInit() {
    this._friendService.getSelectedFriendObservable().subscribe(friend => this.friend = friend);
  }

  sendMessage(event, message: string) {
    this.friend.addMessage(null, message);
    event.target.value = '';
  }
}
