import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFriendComponent } from './whatsapp-friend.component';

describe('WhatsappFriendComponent', () => {
  let component: WhatsappFriendComponent;
  let fixture: ComponentFixture<WhatsappFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
