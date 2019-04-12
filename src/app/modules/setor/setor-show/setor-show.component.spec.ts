import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorShowComponent } from './setor-show.component';

describe('SetorShowComponent', () => {
  let component: SetorShowComponent;
  let fixture: ComponentFixture<SetorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
