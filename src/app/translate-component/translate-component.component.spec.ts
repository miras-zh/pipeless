import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateComponentComponent } from './translate-component.component';

describe('TranslateComponentComponent', () => {
  let component: TranslateComponentComponent;
  let fixture: ComponentFixture<TranslateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslateComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
