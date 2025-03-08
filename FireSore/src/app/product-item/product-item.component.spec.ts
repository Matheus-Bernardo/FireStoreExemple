import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducItemComponent } from './product-item.component';

describe('ProducItemComponent', () => {
  let component: ProducItemComponent;
  let fixture: ComponentFixture<ProducItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProducItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
