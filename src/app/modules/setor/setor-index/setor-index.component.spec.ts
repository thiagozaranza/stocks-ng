import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorIndexComponent } from './setor-index.component';

describe('SetorIndexComponent', () => {
  let component: SetorIndexComponent;
  let fixture: ComponentFixture<SetorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
