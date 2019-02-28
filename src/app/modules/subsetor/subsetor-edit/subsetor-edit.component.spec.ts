import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetorEditComponent } from './subsetor-edit.component';

describe('SubsetorEditComponent', () => {
  let component: SubsetorEditComponent;
  let fixture: ComponentFixture<SubsetorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsetorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
