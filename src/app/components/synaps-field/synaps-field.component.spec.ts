import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynapsFieldComponent } from './synaps-field.component';

describe('SynapsFieldComponent', () => {
  let component: SynapsFieldComponent;
  let fixture: ComponentFixture<SynapsFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynapsFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynapsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
