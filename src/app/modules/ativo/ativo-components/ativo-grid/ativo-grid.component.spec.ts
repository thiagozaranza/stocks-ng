import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoGridComponent } from './ativo-grid.component';

describe('AtivoGridComponent', () => {
  let component: AtivoGridComponent;
  let fixture: ComponentFixture<AtivoGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
