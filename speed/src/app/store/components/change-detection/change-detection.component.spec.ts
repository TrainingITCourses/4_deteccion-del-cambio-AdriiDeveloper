// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

// Components
import * as include from 'app/store/components';

describe('ChangeDetectionComponent', () => {
  let component: include.ChangeDetectionComponent;
  let fixture: ComponentFixture<include.ChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        include.ChangeDetectionComponent,
        include.ChangeDetectionComponent, 
        include.CriterionTypeComponent, 
        include.CriterionValuesComponent, 
        include.ResultsComponent, 
        include.SearchComponent
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(include.ChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Búsqueda: ');
  }));
});
