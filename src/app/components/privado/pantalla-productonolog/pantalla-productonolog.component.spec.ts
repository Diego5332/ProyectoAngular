import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaProductonologComponent } from './pantalla-productonolog.component';

describe('PantallaProductonologComponent', () => {
  let component: PantallaProductonologComponent;
  let fixture: ComponentFixture<PantallaProductonologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaProductonologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaProductonologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
