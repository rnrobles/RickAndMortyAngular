import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationFilter } from '../../models/location.model';
import { LocationListComponent } from '../location-list/location-list.component';

@Component({
  selector: 'app-locations-view',
  templateUrl: './locations-view.component.html',
  styleUrls: ['./locations-view.component.scss'],
})
export class LocationsViewComponent implements OnInit {
  ids: string[] | undefined;

  @ViewChild(LocationListComponent) locationListComponent:
    | LocationListComponent
    | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.ids = this.route.snapshot.queryParams.ids;
  }

  search(filter: LocationFilter) {
    this.locationListComponent?.searchFilter(filter);
  }
}
