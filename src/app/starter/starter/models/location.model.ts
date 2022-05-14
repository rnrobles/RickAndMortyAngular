export class Location {
  id: number | undefined;
  name: string | undefined;
  type: string | undefined;
  dimension: string | undefined;
  residents: string[] | undefined;
  url: string | undefined;
  created: string | undefined;
}

export class LocationFilter {
  constructor() {
    this.name = '';
    this.type = '';
    this.dimension = '';
  }
  name: string | undefined;
  type: string | undefined;
  dimension: string | undefined;
}
