export class Episode {
  id: number | undefined;
  name: string | undefined;
  air_date: string | undefined;
  episode: string | undefined;
  characters: string[] | undefined;
  url: string | undefined;
  created: string | undefined;
}

export class EpisodeFilters {
  constructor(){
    this.name="";
    this.episode="";
  }

  name: string | undefined;
  episode: string | undefined;
}
