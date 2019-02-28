import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoIndexComponent } from './segmento-index.component';

describe('SegmentoIndexComponent', () => {
  let component: SegmentoIndexComponent;
  let fixture: ComponentFixture<SegmentoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
