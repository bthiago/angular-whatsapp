import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSearchComponent } from './whatsapp-search.component';

describe('WhatsappSearchComponent', () => {
  let component: WhatsappSearchComponent;
  let fixture: ComponentFixture<WhatsappSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsappSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
