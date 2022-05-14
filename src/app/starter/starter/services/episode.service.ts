import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Episode, EpisodeFilters } from '../models/episode.model';
import { RequestApi } from '../models/request.model';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  constructor(private http: HttpClient) {}

  getAllEpisodes(filter?: EpisodeFilters): Observable<RequestApi<Episode[]>> {
    return this.http
      .get<RequestApi<Episode[]>>(environment.apiUrl + 'episode', {
        params: { ...filter },
      })
      .pipe(
        map((data) => {
          data.results?.forEach((episode) => {
            episode = this.mapEpisode(episode);
          });
          return data;
        })
      );
  }

  getEpisodesByIds(ids?: string[]): Observable<Episode[]> {
    let idsRoute = '';
    debugger;
    if (ids?.length && ids.length > 1) {
      idsRoute = idsRoute + ids?.map((v) => v);
    } else if (ids?.length) {
      idsRoute = ids?.toString();
    }

    return this.http
      .get<Episode[]>(environment.apiUrl + 'episode/' + idsRoute)
      .pipe(
        map((data) => {
          if (data instanceof Array) {
            data?.forEach((episode) => {
              episode = this.mapEpisode(episode);
            });
            return data;
          } else {
            let temp: Episode[] = [];
            temp.push(data);
            temp?.forEach((episode) => {
              episode = this.mapEpisode(episode);
            });
            return temp;
          }
        })
      );
  }

  getEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(environment.apiUrl + 'episode/' + id).pipe(
      map((episode) => {
        episode = this.mapEpisode(episode);
        return episode;
      })
    );
  }

  mapEpisode(episode: Episode): Episode {
    episode.characters = episode.characters?.map(
      (v) => v.split('character/')[1]
    );
    return episode;
  }
}
