import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFriendMessageComponent } from './whatsapp-friend-message.component';

describe('WhatsappFriendMessageComponent', () => {
  let component: WhatsappFriendMessageComponent;
  let fixture: ComponentFixture<WhatsappFriendMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappFriendMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappFriendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
