import { Component, Input, OnInit } from '@angular/core';
import { Episode, EpisodeFilters } from '../../models/episode.model';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[] = [];
  @Input() episodesIds: string[] | undefined = undefined;

  cols = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
    { field: 'air_date', header: 'Air date' },
    { field: 'episode', header: 'Episode' },
    { field: 'url', header: 'Url' },
    { field: 'created', header: 'Creado' },
    //  { field: 'characters', header: 'Characters' },
    { field: 'acciones', header: 'Acciones' },
  ];

  constructor(private episodeService: EpisodeService) {}

  ngOnInit() {
    if (this.episodesIds == undefined) {
      this.episodeService.getAllEpisodes().subscribe((resp) => {
        if (resp.results) {
          this.episodes = resp.results;
        }
      });
    } else {
      this.episodeService
        .getEpisodesByIds(this.episodesIds)
        .subscribe((resp) => {
          if (resp) {
            this.episodes = resp;
          }
        });
    }
  }

  searchFilter(filter: EpisodeFilters) {
    this.episodeService.getAllEpisodes(filter).subscribe((resp) => {
      if (resp.results) {
        this.episodes = resp.results;
      }
    });
  }
}
