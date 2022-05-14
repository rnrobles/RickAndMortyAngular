import { Component, Input, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location, LocationFilter } from '../../models/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  @Input() locationIds: string[] | undefined = undefined;

  cols = [
    { field: 'id', header: 'id' },
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'dimension', header: 'Dimension' },
    { field: 'url', header: 'Url' },
    { field: 'created', header: 'Created' },
    // { field: 'residents', header: 'residents' },
    { field: 'acciones', header: 'Acciones' },
  ];

  residents: string[] | undefined;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    if (this.locationIds == undefined) {
      this.locationService.getAllLocations().subscribe((resp) => {
        if (resp.results) {
          this.locations = resp.results;
        }
      });
    } else {
      this.locationService
        .getLocationsByIds(this.locationIds)
        .subscribe((resp) => {
          if (resp) {
            this.locations = resp;
          }
        });
    }
  }


  searchFilter(filter: LocationFilter) {
    this.locationService.getAllLocations(filter).subscribe((resp) => {
      if (resp.results) {
        this.locations = resp.results;
      }
    });
  }
}
