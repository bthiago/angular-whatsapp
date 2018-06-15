import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../classes/user';
import {FriendService} from '../../services/friend.service';

@Component({
  selector: 'app-friend-message',
  templateUrl: './whatsapp-friend-message.component.html',
  styleUrls: ['./whatsapp-friend-message.component.scss']
})
export class WhatsappFriendMessageComponent implements OnInit {
  public friend: User;

  constructor(private _friendService: FriendService) { }

  ngOnInit() {
    this._friendService.getSelectedFriendObservable().subscribe(friend => this.friend = friend);
  }

}
