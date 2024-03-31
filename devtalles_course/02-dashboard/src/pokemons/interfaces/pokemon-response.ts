export interface PokemonResponse {
  count: number;
  nex: string;
  privious: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
