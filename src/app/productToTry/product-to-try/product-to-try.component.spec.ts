import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToTryComponent } from './product-to-try.component';

describe('ProductToTryComponent', () => {
  let component: ProductToTryComponent;
  let fixture: ComponentFixture<ProductToTryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductToTryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductToTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
