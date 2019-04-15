import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditButtonComponent } from './modal-edit-button.component';

describe('ModalEditButtonComponent', () => {
  let component: ModalEditButtonComponent;
  let fixture: ComponentFixture<ModalEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
