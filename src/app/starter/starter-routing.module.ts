import { ContentComponent } from './starter/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { CharacterComponent } from './starter/character/character/character.component';
import { CharactersViewComponent } from './starter/character/characters-view/characters-view.component';
import { EpisodesViewComponent } from './starter/episode/episodes-view/episodes-view.component';
import { LocationsViewComponent } from './starter/location/locations-view/locations-view.component';
import { EpisodeComponent } from './starter/episode/episode/episode.component';
import { LocationComponent } from './starter/location/location/location.component';
import { CharacterCompareComponent } from './starter/character/character-compare/character-compare.component';

const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    children: [
      {
        path: '',
        component: ContentComponent,
      },

      {
        path: 'characters/:id',
        component: CharacterComponent,
      },

      {
        path: 'characters-compare',
        component: CharacterCompareComponent,
      },

      {
        path: 'characters-view',
        component: CharactersViewComponent,
      },

      {
        path: 'episode/:id',
        component: EpisodeComponent,
      },

      {
        path: 'episodes-view',
        component: EpisodesViewComponent,
      },

      {
        path: 'location/:id',
        component: LocationComponent,
      },

      {
        path: 'location-view',
        component: LocationsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterRoutingModule {}
