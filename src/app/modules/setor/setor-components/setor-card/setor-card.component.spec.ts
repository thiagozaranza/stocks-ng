import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorCardComponent } from './setor-card.component';

describe('SetorCardComponent', () => {
  let component: SetorCardComponent;
  let fixture: ComponentFixture<SetorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
