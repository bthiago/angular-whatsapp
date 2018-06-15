import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappCanvasComponent } from './whatsapp-canvas.component';

describe('WhatsappCanvasComponent', () => {
  let component: WhatsappCanvasComponent;
  let fixture: ComponentFixture<WhatsappCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
