import {Deserializable} from "./deserializable";

export class SearchResult<T extends Deserializable<T>> implements Deserializable<SearchResult<T>> {
  constructor(private type: new() => T) {

  }

  results: Array<T> = [];
  count: number = 0;
  totalPages: number = 0;
  index: number = 1;

  deserialize(input: any): SearchResult<T> {
    Object.assign(this, input);
    return this;
  }
}
