import { product } from "./product.types";

export type delivery = {
   _id: string;
   deliveryKey: string;
   deliveryName: string;
   deliveryDescription?: string;
   from: string;
   begging: string;
   ending: string;
   products: product[];
};
