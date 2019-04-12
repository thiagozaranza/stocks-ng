import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorDeleteConfirmComponent } from './setor-delete-confirm.component';

describe('SetorDeleteConfirmComponent', () => {
  let component: SetorDeleteConfirmComponent;
  let fixture: ComponentFixture<SetorDeleteConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorDeleteConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
