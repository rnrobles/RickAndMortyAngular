import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CharacterFilter,
  CharacterGender,
  CharacterStatus,
} from '../../models/character.model';

@Component({
  selector: 'app-character-filters',
  templateUrl: './character-filters.component.html',
  styleUrls: ['./character-filters.component.scss'],
})
export class CharacterFiltersComponent implements OnInit {
  form: FormGroup;

  filter: CharacterFilter = new CharacterFilter();

  @Output() search = new EventEmitter<CharacterFilter>();

  characterStatus: any[] = [];
  characterGender: any[] = [];

  characterId1: string = '';
  characterId2: string = '';
  characterId3: string = '';

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control(''),
      status: fb.control(''),
      species: fb.control(''),
      type: fb.control(''),
      gender: fb.control(''),
    });

    this.characterStatus = Object.keys(CharacterStatus).map((element) => {
      return { label: element, value: element };
    });
    this.characterGender = Object.keys(CharacterGender).map((element) => {
      return { label: element, value: element };
    });
    debugger;
  }

  ngOnInit(): void {}

  searchEvent() {
    let filter: CharacterFilter = this.form.value;
    this.search.emit(filter);
  }

  clearFilter() {
    this.form.patchValue(new CharacterFilter());
    this.searchEvent();
  }
}
