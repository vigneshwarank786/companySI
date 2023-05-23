import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMaintanceComponent } from './website-maintance.component';

describe('WebsiteMaintanceComponent', () => {
  let component: WebsiteMaintanceComponent;
  let fixture: ComponentFixture<WebsiteMaintanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteMaintanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteMaintanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
