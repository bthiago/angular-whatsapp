import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FriendList} from '../../classes/friend-list';
import {User} from '../../classes/user';
import {FriendService} from '../../services/friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './whatsapp-friend-list.component.html',
  styleUrls: ['./whatsapp-friend-list.component.scss'],
})
export class WhatsappFriendListComponent implements OnInit {
  public friends: FriendList[];

  constructor(private _friendService: FriendService, private _ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.friends = this._friendService.friendList;
  }

  selectFriend(friend: User) {
    this._friendService.selectedFriend = friend;
    this._ref.detectChanges();
  }
}
