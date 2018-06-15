import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappChatMessageComponent } from './whatsapp-chat-message.component';

describe('WhatsappChatMessageComponent', () => {
  let component: WhatsappChatMessageComponent;
  let fixture: ComponentFixture<WhatsappChatMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappChatMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
