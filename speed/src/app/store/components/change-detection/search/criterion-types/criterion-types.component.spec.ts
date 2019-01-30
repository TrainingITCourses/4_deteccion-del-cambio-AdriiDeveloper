// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

// Criterion Component
import { CriterionTypeComponent } from './criterion-types.component';

describe('CriterionTypeComponent', () => {
  let component: CriterionTypeComponent;
  let fixture: ComponentFixture<CriterionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriterionTypeComponent ],
      imports: [ FormsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriterionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
