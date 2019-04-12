import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoShowComponent } from './ativo-show.component';

describe('AtivoShowComponent', () => {
  let component: AtivoShowComponent;
  let fixture: ComponentFixture<AtivoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
