// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Launches Service
import { LaunchesService } from 'app/store/services';

// Launch Model
import { Launch, ResultCriterion } from 'app/store/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html'
})
export class ChangeDetectionComponent implements OnInit {
  
  filteredLaunches$: BehaviorSubject<Launch[]> = new BehaviorSubject(null);
  launches: Launch[];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getLaunches().subscribe((launches) => this.launches = launches);
  }

  /**
   * This function performs a filtering in the launch library depending on the search performed
   * @param criterion type and id
   */
  onLaunchCriterionChange = (criterion: ResultCriterion) => {
    // Clear launches array
    let filter = [];    

    switch (criterion.type) {
      case 'agencies':
        filter = this.launches.filter(launch => ((launch.rocket.agencies ? launch.rocket.agencies.find(agency => agency.id === criterion.id) : false)));
        break;
      case 'types':
        filter = this.launches.filter(launch => launch.missions.find(mission => mission.type === criterion.id));
        break;
      case 'status':
        filter = this.launches.filter(launch => launch.status === criterion.id);   
        break;
      default:
        throw new Error(`${criterion.type} does not match any value`);
    }

    this.filteredLaunches$.next(filter);
  }
}
