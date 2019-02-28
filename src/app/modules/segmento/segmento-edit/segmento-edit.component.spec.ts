import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoEditComponent } from './segmento-edit.component';

describe('SegmentoEditComponent', () => {
  let component: SegmentoEditComponent;
  let fixture: ComponentFixture<SegmentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
