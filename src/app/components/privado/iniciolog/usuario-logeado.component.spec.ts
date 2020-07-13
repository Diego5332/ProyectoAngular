import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioLogeadoComponent } from './usuario-logeado.component';

describe('UsuarioLogeadoComponent', () => {
  let component: UsuarioLogeadoComponent;
  let fixture: ComponentFixture<UsuarioLogeadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioLogeadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioLogeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
