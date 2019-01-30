// Angular
import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Models
import { ResultCriteria, ResultCriterion, Status } from 'app/store/models';

// Launches Service
import { LaunchesService } from 'app/store/services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  criterionResults$: BehaviorSubject<ResultCriteria[]> = new BehaviorSubject([]);
  criterionType: string;

  @Output() launchCriterionChange = new EventEmitter<any>();

  constructor(private launchesService: LaunchesService) {}

  /**
   * Depending on the selected search criteria, the related types are collected
   * @param criterionType type of criterion
   */
  onCriterionTypeChange = (criterionType: string) => {
    this.criterionType = criterionType;

    switch (this.criterionType) {
      case 'agencies':
        this.launchesService.getAgencies().subscribe((agencies) => {
          this.emitCriterionResults(agencies);
        });
        break;
      case 'types':
        this.launchesService.getTypes().subscribe((missionTypes) => {
          this.emitCriterionResults(missionTypes);
        });
        break;
      case 'status':
        this.launchesService.getStatus().subscribe((statusTypes) => {
          this.emitCriterionResults(statusTypes);
        });
        break;
      default:
        throw new Error(`${this.criterionType} does not match any value`);
    }
  }

  /**
   * This function is executed when a criterion type is selected and it emits the one that has been selected
   * @param criterionResultId id of criterion
   */
  onCriterionResultChange = (criterionResultId: string): void => {
    this.launchCriterionChange.emit(new ResultCriterion(this.criterionType, +(criterionResultId)));
  }

  /**
   * This function emit an event with the types related to the selected search criteria
   * @param results The types of the selected search criteria
   */
  emitCriterionResults = (results: Status[]): void => {
    let criterionResults = [];

    results.forEach((result) => {
      criterionResults.push(new ResultCriteria(result.id, result.name));
    });
    
    this.criterionResults$.next(criterionResults);
  }
}
