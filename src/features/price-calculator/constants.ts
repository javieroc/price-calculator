import { Flavor } from './types';

const FLAVORS: Flavor[] = ['Chocolate', 'Vanilla', 'Strawberry', 'Neapolitan'];

const FLAVORS_VALUES: Record<Flavor, number> = {
  Chocolate: 0.97,
  Vanilla: 0.45,
  Strawberry: 0.63,
  Neapolitan: (0.97 + 0.45 + 0.63) / 3,
};

export const CONSTANTS = {
  FLAVORS,
  FLAVORS_VALUES,
};
