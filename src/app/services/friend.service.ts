import {Injectable} from '@angular/core';
import {FriendList} from '../classes/friend-list';
import {User} from '../classes/user';
import {Observable, of} from 'rxjs';

@Injectable()
export class FriendService {

  private _selectedFriend: User;
  private _friendList: FriendList[];
  private _observable: Observable<User>;

  constructor() {
    this._friendList = this.getFakeFriendList();
    this.selectedFriend = this._friendList[0].friend;
  }

  getSelectedFriendObservable(): Observable<User> {
    this._observable = of(this.selectedFriend);
    return this._observable;
  }

  get selectedFriend(): User {
    return this._selectedFriend;
  }

  set selectedFriend(value: User) {
    this._selectedFriend = value;
  }

  get friendList(): FriendList[] {
    return this._friendList;
  }

  private getFakeFriendList() {
    const gohan = new User('Gohan Sayajin', 'assets/user/picture/gohan-face.jpg');
    const goku = new User('Goku Sayajin', 'assets/user/picture/goku-face.jpg');
    const vegeta = new User('Vegeta Sayajin', 'assets/user/picture/vegeta-face.jpg');

    return [
      new FriendList(gohan, null),
      new FriendList(goku, null),
      new FriendList(vegeta, null)
    ];
  }
}
