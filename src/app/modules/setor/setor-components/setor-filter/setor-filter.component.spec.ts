import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorFilterComponent } from './setor-filter.component';

describe('SetorFilterComponent', () => {
  let component: SetorFilterComponent;
  let fixture: ComponentFixture<SetorFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
