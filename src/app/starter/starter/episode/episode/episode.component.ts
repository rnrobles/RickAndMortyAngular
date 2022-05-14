import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Episode } from '../../models/episode.model';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  id: string | null = null;
  episode: Episode | undefined;

  constructor(
    private episodeService: EpisodeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.episodeService
        .getEpisode(Number.parseInt(this.id))
        .subscribe((resp) => {
          if (resp) {
            this.episode = resp;
          }
        });
    }
  }
}
