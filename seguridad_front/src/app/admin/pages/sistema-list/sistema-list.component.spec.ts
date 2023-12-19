import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaListComponent } from './sistema-list.component';

describe('SistemaListComponent', () => {
  let component: SistemaListComponent;
  let fixture: ComponentFixture<SistemaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
