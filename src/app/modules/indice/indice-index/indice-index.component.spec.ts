import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceIndexComponent } from './indice-index.component';

describe('IndiceIndexComponent', () => {
  let component: IndiceIndexComponent;
  let fixture: ComponentFixture<IndiceIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
