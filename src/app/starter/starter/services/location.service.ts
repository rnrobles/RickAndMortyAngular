import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LocationFilter } from '../models/location.model';
import { RequestApi } from '../models/request.model';
import { Location } from '../models/location.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getAllLocations(filter?: LocationFilter): Observable<RequestApi<Location[]>> {
    return this.http
      .get<RequestApi<Location[]>>(environment.apiUrl + 'location', {
        params: { ...filter },
      })
      .pipe(
        map((data) => {
          data.results?.forEach((location) => {
            location = this.mapLocation(location);
          });
          return data;
        })
      );
  }

  getLocationsByIds(ids?: string[]): Observable<Location[]> {
    let idsRoute = '';
    if (ids?.length) {
      idsRoute = idsRoute + ids?.map((v) => v + ',');
    }
    return this.http
      .get<Location[]>(environment.apiUrl + 'locations/' + idsRoute)
      .pipe(
        map((data) => {
          if (data instanceof Array) {
            data?.forEach((location) => {
              location = this.mapLocation(location);
            });
            return data;
          } else {
            let temp: Location[] = [];
            temp.push(data);
            temp.forEach((location) => {
              location = this.mapLocation(location);
            });
            return temp;
          }
        })
      );
  }

  getLocation(id: number): Observable<Location> {
    return this.http.get<Location>(environment.apiUrl + 'location/' + id).pipe(
      map((location) => {
        location = this.mapLocation(location);
        return location;
      })
    );
  }

  mapLocation(location: Location): Location {
    location.residents = location.residents?.map(
      (v) => v.split('character/')[1]
    );

    return location;
  }
}
