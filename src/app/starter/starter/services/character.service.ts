import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Character, CharacterFilter } from '../models/character.model';
import { RequestApi } from '../models/request.model';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getAllCharacters(
    filter?: CharacterFilter
  ): Observable<RequestApi<Character[]>> {
    return this.http
      .get<RequestApi<Character[]>>(environment.apiUrl + 'character', {
        params: { ...filter },
      })
      .pipe(
        map((data) => {
          data.results?.forEach((character) => {
            character = this.mapCharacter(character);
          });
          return data;
        })
      );
  }

  getCharactersByIds(ids?: string[]): Observable<Character[]> {
    let idsRoute = '';
    if (ids?.length) {
      idsRoute = '/';
      idsRoute = idsRoute + ids?.map((v) => v + ',');
    }
    return this.http
      .get<Character[]>(environment.apiUrl + 'character' + idsRoute)
      .pipe(
        map((data) => {
          if (data instanceof Array) {
            data.forEach((character) => {
              character = this.mapCharacter(character);
            });
            return data;
          } else {
            let temp: Character[] = [];
            temp.push(data);
            temp.forEach((character) => {
              character = this.mapCharacter(character);
            });
            return temp;
          }
        })
      );
  }

  getCharacter(id: number): Observable<Character> {
    return this.http
      .get<Character>(environment.apiUrl + 'character/' + id)
      .pipe(
        map((character) => {
          character = this.mapCharacter(character);
          return character;
        })
      );
  }

  mapCharacter(character: Character): Character {
    if (character.origin && character.origin.url) {
      character.origin.url = character.origin.url.split('location/')[1];
    }

    if (character.location && character.location.url) {
      character.location.url = character.location.url.split('location/')[1];
    }

    if (character.episode) {
      character.episode = character.episode?.map((v) => v.split('episode/')[1]);
    }

    return character;
  }
}
