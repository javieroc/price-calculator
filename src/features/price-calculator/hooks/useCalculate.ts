import { CONSTANTS } from '../constants';
import { FrozenPizzaPayload, IceCreamPayload, SKU } from '../types';

function useCalculate(sku: SKU) {
  const iceCreamResult = (
    { volume, flavor, milk }: IceCreamPayload,
  ): number => volume * (3 * milk + CONSTANTS.FLAVORS_VALUES[flavor]);

  const frozenPizzaResult = (
    {
      diameter, quantity, toppings, cheese, crust,
    }: FrozenPizzaPayload,
  ): number => {
    const r = diameter / 2;
    const A = Math.PI * r ** 2;
    const T = toppings.reduce((sum, topping) => sum + CONSTANTS.TOPPINGS_VALUES[topping], 0);
    const C = CONSTANTS.CHEESES_VALUES[cheese];
    const R = CONSTANTS.CRUSTS_VALUES[crust];
    return quantity * (A * T + A * C + A * R);
  };

  const calculateFunctions: Record<SKU, (values: any) => number> = {
    'ice-cream': iceCreamResult,
    'frozen-pizza': frozenPizzaResult,
  };

  return calculateFunctions[sku];
}

export { useCalculate };
