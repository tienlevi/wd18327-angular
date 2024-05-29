import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai4Component } from './bai4.component';

describe('Bai4Component', () => {
  let component: Bai4Component;
  let fixture: ComponentFixture<Bai4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bai4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bai4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
