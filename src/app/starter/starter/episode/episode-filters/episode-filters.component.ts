import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EpisodeFilters } from '../../models/episode.model';

@Component({
  selector: 'app-episode-filters',
  templateUrl: './episode-filters.component.html',
  styleUrls: ['./episode-filters.component.scss'],
})
export class EpisodeFiltersComponent implements OnInit {
  form: FormGroup;

  filter: EpisodeFilters = new EpisodeFilters();

  @Output() search = new EventEmitter<EpisodeFilters>();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control(''),
      episode: fb.control(''),
    });
  }

  ngOnInit(): void {}

  searchEvent() {
    let filter: EpisodeFilters = this.form.value;
    this.search.emit(filter);
  }

  clearFilter() {
    this.form.patchValue(new EpisodeFilters());
    this.searchEvent();
  }
}
