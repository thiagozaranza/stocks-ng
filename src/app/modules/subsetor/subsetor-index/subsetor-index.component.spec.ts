import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetorIndexComponent } from './subsetor-index.component';

describe('SubsetorIndexComponent', () => {
  let component: SubsetorIndexComponent;
  let fixture: ComponentFixture<SubsetorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsetorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
