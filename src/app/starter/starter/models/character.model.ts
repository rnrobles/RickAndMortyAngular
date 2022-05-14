export class Character {
  id: number | undefined;
  name: string | undefined;
  status: CharacterStatus | undefined;
  species: string | undefined;
  type: string | undefined;
  gender: CharacterGender | undefined;
  image: string | undefined;
  episode: string[] | undefined;
  url: string | undefined;
  created: string | undefined;
  origin: CharacterOrigin | undefined;
  location: CharacterLocation | undefined;
}

export class CharacterFilter {
  constructor() {
    this.name = '';
    this.status = '';
    this.species = '';
    this.type = '';
    this.gender = '';
  }

  name: string | undefined;
  status: CharacterStatus | string;
  species: string | undefined;
  type: string | undefined;
  gender: CharacterGender | string;
}

export enum CharacterGender {
  Female = 'Female',
  Male = 'Male',
  Genderless = 'Genderless',
  unknown = 'unknown',
}

export enum CharacterStatus {
  Alive = 'Alive',
  Dead = 'Dead',
  unknown = 'unknown',
}

export class CharacterOrigin {
  name: string | undefined;
  url: string | undefined;
}

export class CharacterLocation {
  name: string | undefined;
  url: string | undefined;
}
