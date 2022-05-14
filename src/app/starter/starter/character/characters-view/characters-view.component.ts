import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterFilter } from '../../models/character.model';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.scss'],
})
export class CharactersViewComponent implements OnInit {
  @ViewChild(CharacterListComponent) characterListComponent:
    | CharacterListComponent
    | undefined;

  ids: string[] | undefined;
  from: string = '';

  constructor(private route: ActivatedRoute) {
    this.ids = this.route.snapshot.queryParams.ids;
    this.from = this.route.snapshot.queryParams.from;
  }

  ngOnInit(): void {}

  search(filter: CharacterFilter) {
    debugger
    this.characterListComponent?.searchFilter(filter);
  }
}
