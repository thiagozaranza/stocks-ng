import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsetorCreateComponent } from './subsetor-create.component';

describe('SubsetorCreateComponent', () => {
  let component: SubsetorCreateComponent;
  let fixture: ComponentFixture<SubsetorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsetorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsetorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
