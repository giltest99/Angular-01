import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonkatComponent } from './konkat.component';

describe('KonkatComponent', () => {
  let component: KonkatComponent;
  let fixture: ComponentFixture<KonkatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KonkatComponent]
    });
    fixture = TestBed.createComponent(KonkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
