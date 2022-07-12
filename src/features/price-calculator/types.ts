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

export type Toppings = 'Pepperoni' | 'Extra Cheese' | 'Sausage & Peppers' | 'Spinach Alfredo' | 'Buffalo Chicken';

export type Cheese = 'Vegan' | 'Mozzarella' | '3 Cheese';

export type Crust = 'Cauliflower' | 'Neapolitan' | 'New York' | 'Chicago';

export interface FrozenPizzaPayload {
  diameter: number;
  quantity: number;
  toppings: Toppings[];
  cheese: Cheese;
  crust: Crust;
}
