import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorModalFormComponent } from './setor-modal-form.component';

describe('SetorModalFormComponent', () => {
  let component: SetorModalFormComponent;
  let fixture: ComponentFixture<SetorModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
