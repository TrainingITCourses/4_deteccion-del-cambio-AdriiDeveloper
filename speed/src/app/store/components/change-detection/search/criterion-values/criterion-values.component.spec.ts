// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// CriterionValues Component
import { CriterionValuesComponent } from './criterion-values.component';

describe('CriterionValuesComponent', () => {
  let component: CriterionValuesComponent;
  let fixture: ComponentFixture<CriterionValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterionValuesComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterionValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
