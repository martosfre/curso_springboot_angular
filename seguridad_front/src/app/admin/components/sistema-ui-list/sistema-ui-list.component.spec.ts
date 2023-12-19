import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaUiListComponent } from './sistema-ui-list.component';

describe('SistemaUiListComponent', () => {
  let component: SistemaUiListComponent;
  let fixture: ComponentFixture<SistemaUiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaUiListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaUiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
