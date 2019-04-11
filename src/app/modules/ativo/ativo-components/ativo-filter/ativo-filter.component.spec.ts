import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoFilterComponent } from './ativo-filter.component';

describe('AtivoFilterComponent', () => {
  let component: AtivoFilterComponent;
  let fixture: ComponentFixture<AtivoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
