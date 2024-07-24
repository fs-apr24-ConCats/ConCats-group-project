import {
  Navigate,
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="home" element={<Navigate to={'/'} />} />

        <Route path="phones" element={<h1>Phones</h1>} />
        <Route path="phones/:itemId" element={<h1>PhonesItems</h1>} />

        <Route path="tablets" element={<h1>Tablets</h1>} />
        <Route path="tablets/:itemId" element={<h1>TabletsItems</h1>} />

        <Route path="acessories" element={<h1>Acessories</h1>} />
        <Route path="acessories/:itemId" element={<h1>AcessoriesItems</h1>} />

        <Route path="favorites" element={<h1>Favorites</h1>} />
        <Route path="cart" element={<h1>Cart</h1>} />
        <Route path="*" element={<h1>NotFoundPage</h1>} />
      </Route>
    </Routes>
  </Router>
);
