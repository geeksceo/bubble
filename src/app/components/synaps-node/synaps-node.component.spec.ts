import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynapsNodeComponent } from './synaps-node.component';

describe('SynapsNodeComponent', () => {
  let component: SynapsNodeComponent;
  let fixture: ComponentFixture<SynapsNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynapsNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SynapsNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
