import { Phone, Product } from "../types";
import { client } from "../utils/fetchClient";

export const getPhones = () => {
  return client.get<Phone[]>('phones.json');
};

// export const getTablets = () => {
//   return client.get<Phone[]>('tablets.json');
// };

// export const getAccessories = () => {
//   return client.get<Phone[]>('accessories.json');
// };

export const getProducts = () => {
  return client.get<Product[]>('products.json');
};

