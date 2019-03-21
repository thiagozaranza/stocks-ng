import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroTipoIndexComponent } from './tesouro-tipo-index.component';

describe('TesouroTipoIndexComponent', () => {
  let component: TesouroTipoIndexComponent;
  let fixture: ComponentFixture<TesouroTipoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouroTipoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroTipoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
