import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { PriceCalculator } from './features';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PriceCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
