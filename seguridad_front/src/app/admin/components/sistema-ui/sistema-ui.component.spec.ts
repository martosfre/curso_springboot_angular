import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaUiComponent } from './sistema-ui.component';

describe('SistemaUiComponent', () => {
  let component: SistemaUiComponent;
  let fixture: ComponentFixture<SistemaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
