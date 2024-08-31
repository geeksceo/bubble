import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterToolsComponent } from './footer-tools.component';

describe('FooterToolsComponent', () => {
  let component: FooterToolsComponent;
  let fixture: ComponentFixture<FooterToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
