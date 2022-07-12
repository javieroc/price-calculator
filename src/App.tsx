import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Layout } from './components';
import { PriceCalculator } from './features';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/*" element={<PriceCalculator />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export { App };
