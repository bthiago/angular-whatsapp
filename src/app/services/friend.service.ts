import {FriendList} from '../classes/friend-list';
import {User} from '../classes/user';
import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import * as faker from 'faker';

@Injectable()
export class FriendService {

  private _selectedFriend: User;
  private _friendList: FriendList[];
  private _friendListObservable: BehaviorSubject<FriendList[]>;
  private _selectedFriendObservable: BehaviorSubject<User>;

  constructor() {
    this._friendList = this.getFakeFriendList();
    this.getSelectedFriendObservable();
    this.selectedFriend = null;
    this._friendListObservable = new BehaviorSubject(this._friendList);
  }

  getSelectedFriendObservable(): BehaviorSubject<User> {
    this._selectedFriendObservable = new BehaviorSubject(this.selectedFriend);
    return this._selectedFriendObservable;
  }

  get selectedFriend(): User {
    return this._selectedFriend;
  }

  set selectedFriend(value: User) {
    this._selectedFriend = value;
    this._selectedFriendObservable.next(value);
  }

  get friendList(): FriendList[] {
    return this._friendList;
  }

  filterFriends(name: string) {
    const filteredFriends = [];
    this.friendList.forEach(friendList => {
      if (friendList.friend.name.toUpperCase().indexOf(name.toUpperCase()) !== -1) {
        filteredFriends.push(friendList);
      }
    });

    this._friendListObservable.next(filteredFriends);
  }

  getFriendListObservable(): BehaviorSubject<FriendList[]> {
    return this._friendListObservable;
  }

  private getFakeFriendList() {
    const user1 = new User(faker.name.findName(), faker.image.avatar());
    const user2 = new User(faker.name.findName(), faker.image.avatar());
    const user3 = new User(faker.name.findName(), faker.image.avatar());

    return [
      new FriendList(user1, null),
      new FriendList(user2, null),
      new FriendList(user3, null)
    ];
  }
}
