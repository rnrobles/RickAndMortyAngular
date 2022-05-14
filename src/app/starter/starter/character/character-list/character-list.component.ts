import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Character, CharacterFilter } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  @Input() characterIds: string[] | undefined = undefined;

  cols = [
    { field: 'id', header: 'id' },
    { field: 'name', header: 'Name' },
    { field: 'status', header: 'Status' },
    { field: 'species', header: 'Species' },
    { field: 'type', header: 'type' },
    { field: 'gender', header: 'Gender' },
    // { field: 'image', header: 'image' },
    { field: 'episode', header: 'episode' },
    //  { field: 'url', header: 'url' },
    { field: 'created', header: 'Created' },
    //   { field: 'origin', header: 'origin' },
    //  { field: 'location', header: 'location' },
    //  { field: 'episode', header: 'episode' },

    { field: 'acciones', header: 'Actions' },
  ];

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    if (this.characterIds == undefined) {
      this.characterService.getAllCharacters().subscribe((resp) => {
        if (resp.results) {
          this.characters = resp.results;
        }
      });
    } else {
      this.characterService
        .getCharactersByIds(this.characterIds)
        .subscribe((resp) => {
          if (resp) {
            this.characters = resp;
          }
        });
    }
  }

  searchFilter(filter: CharacterFilter) {
    this.characterService.getAllCharacters(filter).subscribe((resp) => {
      if (resp.results) {
        this.characters = resp.results;
      }
    });
  }
}
