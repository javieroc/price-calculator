import { CONSTANTS } from '../constants';
import { IceCreamPayload, SKU } from '../types';

function useCalculate(sku: SKU) {
  const iceCreamResult = (
    { volume, flavor, milk }: IceCreamPayload,
  ): number => volume * (3 * milk + CONSTANTS.FLAVORS_VALUES[flavor]);

  const frozenPizzaResult = (
    { volume, flavor, milk }: IceCreamPayload,
  ): number => volume * (3 * milk + CONSTANTS.FLAVORS_VALUES[flavor]);

  const calculateFunctions: Record<SKU, (values: any) => number> = {
    'ice-cream': iceCreamResult,
    'frozen-pizza': frozenPizzaResult,
  };

  return calculateFunctions[sku];
}

export { useCalculate };
