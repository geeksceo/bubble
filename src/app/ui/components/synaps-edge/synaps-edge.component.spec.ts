import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynapsEdgeComponent } from './synaps-edge.component';

describe('SynapsEdgeComponent', () => {
  let component: SynapsEdgeComponent;
  let fixture: ComponentFixture<SynapsEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynapsEdgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynapsEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
