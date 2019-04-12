import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoShowComponent } from './segmento-show.component';

describe('SegmentoShowComponent', () => {
  let component: SegmentoShowComponent;
  let fixture: ComponentFixture<SegmentoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
