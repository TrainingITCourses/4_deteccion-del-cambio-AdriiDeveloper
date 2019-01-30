// Angular
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

// Models
import { ResultCriteria } from 'app/store/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search-criterion-types',
  templateUrl: './criterion-types.component.html'
})
export class CriterionTypeComponent {

  @Input() criterionType: ResultCriteria[];
  @Output() criterionTypeChange = new EventEmitter<string>();

}
