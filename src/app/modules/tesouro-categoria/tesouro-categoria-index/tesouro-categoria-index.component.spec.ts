import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroCategoriaIndexComponent } from './tesouro-categoria-index.component';

describe('TesouroCategoriaIndexComponent', () => {
  let component: TesouroCategoriaIndexComponent;
  let fixture: ComponentFixture<TesouroCategoriaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouroCategoriaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroCategoriaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
