import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  id: string | null = null;
  location: Location | undefined;

  constructor(
    private locationService: LocationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.locationService
        .getLocation(Number.parseInt(this.id))
        .subscribe((resp) => {
          if (resp) {
            this.location = resp;
          }
        });
    }
  }
}
