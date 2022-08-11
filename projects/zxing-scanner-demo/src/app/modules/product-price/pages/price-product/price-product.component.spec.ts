import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceProductComponent } from './price-product.component';

describe('PriceProductComponent', () => {
  let component: PriceProductComponent;
  let fixture: ComponentFixture<PriceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
