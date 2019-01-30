// Angular
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

// Init Configuration
import { INIT_VALUES } from './configuration/init-values';

// Models
import { SearchCriteria } from 'app/store/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-criterion-values',
  templateUrl: './criterion-values.component.html'
})
export class CriterionValuesComponent {

  searchCriteria: SearchCriteria[] = INIT_VALUES.data;

  @Output() criterionTypeChange = new EventEmitter<string>();
  
}