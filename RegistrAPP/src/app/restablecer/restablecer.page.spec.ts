import { ComponentFixture, TestBed } from '@angular/core/testing';
import { restablecerPage } from './restablecer.page'; 

describe('RestablecerPage', () => {
  let component: restablecerPage;
  let fixture: ComponentFixture<restablecerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [restablecerPage], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(restablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
