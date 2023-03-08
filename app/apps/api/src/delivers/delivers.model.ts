import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface DeliversModel extends Base {}

export class DeliversModel extends TimeStamps {
  @prop({ unique: true })
  key: string;

  @prop()
  name: string;

  @prop()
  description?: string;

  @prop()
  from: string;

  @prop()
  begging: string;

  @prop()
  ending: string;

  @prop()
  products: {
    productKey: string;

    productName: string;

    amount: number;

    price: string;

    productDescription: string;

    gender: string;

    category: string;

    producer: string;

    sizes: string[];

    img: string;
  }[];
}
