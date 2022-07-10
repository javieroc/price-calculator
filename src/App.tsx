import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Layout } from './components';
import { PriceCalculator } from './features';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PriceCalculator />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export { App };
