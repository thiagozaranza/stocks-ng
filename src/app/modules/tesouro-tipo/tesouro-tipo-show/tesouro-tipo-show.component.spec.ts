import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroTipoShowComponent } from './tesouro-tipo-show.component';

describe('TesouroTipoShowComponent', () => {
  let component: TesouroTipoShowComponent;
  let fixture: ComponentFixture<TesouroTipoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouroTipoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroTipoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
