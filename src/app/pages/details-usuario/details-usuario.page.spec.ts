import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsUsuarioPage } from './details-usuario.page';

describe('DetailsUsuarioPage', () => {
  let component: DetailsUsuarioPage;
  let fixture: ComponentFixture<DetailsUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailsUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
