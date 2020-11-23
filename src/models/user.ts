import {Address} from "./address";
import {Availability} from "./availability";
import {Deserializable} from "./deserializable";

export class User implements Deserializable<any> {
  id?: number;
  firstName: string = '';
  lastName: string = '';
  occupation: string = '';
  rating: number = 0;
  reviewsCount: number = 0;
  price: number = 0;
  availabilities: Availability[] = [];
  address: Address = new Address();

  deserialize(input: any): this {
    Object.assign(this, input);

    this.availabilities = input.availabilities.map((availabilty: any) => new Availability().deserialize(availabilty));
    this.address = new Address().deserialize(input.address);

    return this;
  }
}
