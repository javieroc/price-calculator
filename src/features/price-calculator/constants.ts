import {
  Cheese, Crust, Flavor, Toppings,
} from './types';

const FLAVORS: Flavor[] = ['Chocolate', 'Vanilla', 'Strawberry', 'Neapolitan'];

const TOPPINGS: Toppings[] = ['Pepperoni', 'Extra Cheese', 'Sausage & Peppers', 'Spinach Alfredo', 'Buffalo Chicken'];

const CHEESES: Cheese[] = ['Vegan', 'Mozzarella', '3 Cheese'];

const CRUSTS: Crust[] = ['Cauliflower', 'Neapolitan', 'New York', 'Chicago'];

const TOPPINGS_VALUES: Record<Toppings, number> = {
  Pepperoni: 0.012,
  'Extra Cheese': 0.009,
  'Sausage & Peppers': 0.015,
  'Spinach Alfredo': 0.0115,
  'Buffalo Chicken': 0.017,
};

const FLAVORS_VALUES: Record<Flavor, number> = {
  Chocolate: 0.97,
  Vanilla: 0.45,
  Strawberry: 0.63,
  Neapolitan: (0.97 + 0.45 + 0.63) / 3,
};

const CHEESES_VALUES: Record<Cheese, number> = {
  Vegan: 0.017,
  Mozzarella: 0.009,
  '3 Cheese': 0.0107,
};

const CRUSTS_VALUES: Record<Crust, number> = {
  Cauliflower: 0.0299,
  Neapolitan: 0.0209,
  'New York': 0.0253,
  Chicago: 0.03,
};

export const CONSTANTS = {
  FLAVORS,
  FLAVORS_VALUES,
  TOPPINGS,
  TOPPINGS_VALUES,
  CHEESES,
  CHEESES_VALUES,
  CRUSTS,
  CRUSTS_VALUES,
};
