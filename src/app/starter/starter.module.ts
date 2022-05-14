import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter/starter.component';
import { ContentComponent } from './starter/content/content.component';
import { ControlSideBarComponent } from './starter/base/control-side-bar/control-side-bar.component';
import { MainSideBarComponent } from './starter/base/main-side-bar/main-side-bar.component';
import { NavBarComponent } from './starter/base/nav-bar/nav-bar.component';
import { FooterComponent } from './starter/base/footer/footer.component';
import { CharacterListComponent } from './starter/character/character-list/character-list.component';
import { EpisodeListComponent } from './starter/episode/episode-list/episode-list.component';
import { LocationListComponent } from './starter/location/location-list/location-list.component';
import { PrimeNgModule } from '../_shared/primeNg.module';
import { CharacterComponent } from './starter/character/character/character.component';
import { CardComponent } from './starter/base/card/card.component';
import { CharactersViewComponent } from './starter/character/characters-view/characters-view.component';
import { EpisodeComponent } from './starter/episode/episode/episode.component';
import { EpisodesViewComponent } from './starter/episode/episodes-view/episodes-view.component';
import { LocationComponent } from './starter/location/location/location.component';
import { LocationsViewComponent } from './starter/location/locations-view/locations-view.component';
import { LocationFiltersComponent } from './starter/location/location-filters/location-filters.component';
import { CharacterFiltersComponent } from './starter/character/character-filters/character-filters.component';
import { EpisodeFiltersComponent } from './starter/episode/episode-filters/episode-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterCompareComponent } from './starter/character/character-compare/character-compare.component';

@NgModule({
  declarations: [
    StarterComponent,
    ContentComponent,
    ControlSideBarComponent,
    MainSideBarComponent,
    NavBarComponent,
    FooterComponent,
    CharacterListComponent,
    EpisodeListComponent,
    LocationListComponent,
    CharacterComponent,
    CardComponent,
    CharactersViewComponent,
    EpisodeComponent,
    EpisodesViewComponent,
    LocationComponent,
    LocationsViewComponent,
    LocationFiltersComponent,
    CharacterFiltersComponent,
    EpisodeFiltersComponent,
    CharacterCompareComponent,
  ],
  imports: [
    CommonModule,
    StarterRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class StarterModule {}
