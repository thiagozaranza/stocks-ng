import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceShowComponent } from './indice-show.component';

describe('IndiceShowComponent', () => {
  let component: IndiceShowComponent;
  let fixture: ComponentFixture<IndiceShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
