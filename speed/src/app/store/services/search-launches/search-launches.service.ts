// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Models
import { Agency, Launch, Payload, Status } from 'app/store/models';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {

  ASSETS: string = 'assets/data';

  constructor(private http: HttpClient) {}

  getStatus = (): Observable<Status[]> => this.http.get(window.location.href + `${this.ASSETS}/launchstatus.json`)
                                                .pipe(
                                                  map(
                                                    (res: any) => res.types)
                                                  )

  getAgencies = (): Observable<Agency[]> => this.http.get(window.location.href + `${this.ASSETS}/agencies.json`)
                                                  .pipe(
                                                    map(
                                                      (res: any) => res.agencies)
                                                    )

   getTypes = (): Observable<Payload[]> => this.http.get(window.location.href + `${this.ASSETS}/missiontypes.json`)
                                                .pipe(
                                                  map(
                                                    (res: any) => res.types)
                                                  )

  getLaunches = (): Observable<Launch[]> => this.http.get(window.location.href + `${this.ASSETS}/launches.json`)
                                                  .pipe(
                                                    map(
                                                      (res: any) => res.launches)
                                                    )      
}
