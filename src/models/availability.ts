import {Deserializable} from "./deserializable";

export class Availability implements Deserializable{
  date: Date = new Date();
  openings: string[] = [];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
