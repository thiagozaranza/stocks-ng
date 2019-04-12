import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoIndexComponent } from './ativo-index.component';

describe('AtivoIndexComponent', () => {
  let component: AtivoIndexComponent;
  let fixture: ComponentFixture<AtivoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
