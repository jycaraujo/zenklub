import {Deserializable} from "./deserializable";

export class Address implements Deserializable<any>{
  zipCode: string = '';
  streetNumber: number = 0;
  street: string = '';
  city: string = '';
  label: string = '';
  country: string = '';
  location: Location = new Location();

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}

export class Location {
  lng?: number;
  lat?: number;
}
