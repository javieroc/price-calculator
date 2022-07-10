import { Route, Routes } from 'react-router-dom';
import { ProductForm } from './components/ProductForm';
import { SelectProduct } from './components/SelectProduct';

function PriceCalculator(): JSX.Element {
  return (
    <Routes>
      <Route index element={<SelectProduct />} />
      <Route path=":sku" element={<ProductForm />} />
    </Routes>
  );
}

export { PriceCalculator };
