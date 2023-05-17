import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDevelopentComponent } from './website-developent.component';

describe('WebsiteDevelopentComponent', () => {
  let component: WebsiteDevelopentComponent;
  let fixture: ComponentFixture<WebsiteDevelopentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteDevelopentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteDevelopentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
