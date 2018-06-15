import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappChatListComponent } from './whatsapp-chat-list.component';

describe('WhatsappChatListComponent', () => {
  let component: WhatsappChatListComponent;
  let fixture: ComponentFixture<WhatsappChatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappChatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
