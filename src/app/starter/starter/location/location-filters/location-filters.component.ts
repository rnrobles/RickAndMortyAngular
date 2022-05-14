import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationFilter } from '../../models/location.model';

@Component({
  selector: 'app-location-filters',
  templateUrl: './location-filters.component.html',
  styleUrls: ['./location-filters.component.scss']
})
export class LocationFiltersComponent implements OnInit {

  form: FormGroup;

  filter: LocationFilter = new LocationFilter();

  @Output() search = new EventEmitter<LocationFilter>();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: fb.control(''),
      type: fb.control(''),
      dimension: fb.control(''),

    });

  }

  ngOnInit(): void {}

  searchEvent() {
    let filter: LocationFilter = this.form.value;
    this.search.emit(filter);
  }

  clearFilter() {
    this.form.patchValue(new LocationFilter());
    this.searchEvent();
  }
}
