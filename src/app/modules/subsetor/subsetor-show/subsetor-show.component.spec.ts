import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetorShowComponent } from './subsetor-show.component';

describe('SubsetorShowComponent', () => {
  let component: SubsetorShowComponent;
  let fixture: ComponentFixture<SubsetorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsetorShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
