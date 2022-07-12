export type SKU = 'ice-cream' | 'frozen-pizza';

export interface Product {
  sku: SKU;
  name: string;
  icon: string;
}

export type Flavor = 'Chocolate' | 'Vanilla' | 'Strawberry' | 'Neapolitan';

export interface IceCreamPayload {
  volume: number;
  flavor: Flavor;
  milk: number;
}
