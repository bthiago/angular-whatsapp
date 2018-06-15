import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFriendListComponent } from './whatsapp-friend-list.component';

describe('WhatsappFriendListComponent', () => {
  let component: WhatsappFriendListComponent;
  let fixture: ComponentFixture<WhatsappFriendListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappFriendListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappFriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
