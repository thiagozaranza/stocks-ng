import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroCategoriaShowComponent } from './tesouro-categoria-show.component';

describe('TesouroCategoriaShowComponent', () => {
  let component: TesouroCategoriaShowComponent;
  let fixture: ComponentFixture<TesouroCategoriaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouroCategoriaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroCategoriaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
