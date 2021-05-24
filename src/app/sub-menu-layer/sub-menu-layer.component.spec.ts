import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuLayerComponent } from './sub-menu-layer.component';

describe('SubMenuLayerComponent', () => {
  let component: SubMenuLayerComponent;
  let fixture: ComponentFixture<SubMenuLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
