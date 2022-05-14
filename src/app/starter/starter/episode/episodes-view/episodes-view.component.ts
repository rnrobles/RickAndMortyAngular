import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeFilters } from '../../models/episode.model';
import { EpisodeFiltersComponent } from '../episode-filters/episode-filters.component';
import { EpisodeListComponent } from '../episode-list/episode-list.component';

@Component({
  selector: 'app-episodes-view',
  templateUrl: './episodes-view.component.html',
  styleUrls: ['./episodes-view.component.scss'],
})
export class EpisodesViewComponent implements OnInit {
  ids: string[] | undefined;
  from: string = '';

  @ViewChild(EpisodeListComponent) episodeListComponent:
  | EpisodeListComponent
  | undefined;

  constructor(private route: ActivatedRoute) {
    debugger

    this.ids = this.route.snapshot.queryParams.ids;
    this.from = this.route.snapshot.queryParams.from;
  }

  ngOnInit(): void {

  }

  search(filter: EpisodeFilters) {
    this.episodeListComponent?.searchFilter(filter);
  }
}
