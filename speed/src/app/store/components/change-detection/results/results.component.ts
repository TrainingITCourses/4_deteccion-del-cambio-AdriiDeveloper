// Angular
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Launch Model
import { Launch } from 'app/store/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {

  @Input() filteredLaunches: Launch[] = null;
  
}
