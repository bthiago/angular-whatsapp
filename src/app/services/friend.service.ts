import {FriendList} from '../classes/friend-list';
import {User} from '../classes/user';
import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class FriendService {

  private _selectedFriend: User;
  private _friendList: FriendList[];
  private _observable: BehaviorSubject<User>;

  constructor() {
    this._friendList = this.getFakeFriendList();
    this.getSelectedFriendObservable();
    this.selectedFriend = this._friendList[0].friend;
  }

  getSelectedFriendObservable(): BehaviorSubject<User> {
    this._observable = new BehaviorSubject(this.selectedFriend);
    return this._observable;
  }

  get selectedFriend(): User {
    return this._selectedFriend;
  }

  set selectedFriend(value: User) {
    this._selectedFriend = value;
    this._observable.next(value);
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
