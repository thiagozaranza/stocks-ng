import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoCreateComponent } from './segmento-create.component';

describe('SegmentoCreateComponent', () => {
  let component: SegmentoCreateComponent;
  let fixture: ComponentFixture<SegmentoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
