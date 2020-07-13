import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaAdminComponent } from './ventana-admin.component';

describe('VentanaAdminComponent', () => {
  let component: VentanaAdminComponent;
  let fixture: ComponentFixture<VentanaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
