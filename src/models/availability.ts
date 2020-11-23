import {Deserializable} from "./deserializable";

export class Availability implements Deserializable<any> {
  date: Date = new Date();
  openings: string[] = [];

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
