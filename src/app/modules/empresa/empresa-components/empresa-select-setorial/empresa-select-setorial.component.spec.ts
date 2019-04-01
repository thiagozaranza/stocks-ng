import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaSelectSetorialComponent } from './empresa-select-setorial.component';

describe('EmpresaSelectSetorialComponent', () => {
  let component: EmpresaSelectSetorialComponent;
  let fixture: ComponentFixture<EmpresaSelectSetorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaSelectSetorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaSelectSetorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
