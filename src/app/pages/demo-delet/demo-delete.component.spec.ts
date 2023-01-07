import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDeleteComponent } from './demo-delete.component';

describe('DemoDeletComponent', () => {
  let component: DemoDeleteComponent;
  let fixture: ComponentFixture<DemoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
