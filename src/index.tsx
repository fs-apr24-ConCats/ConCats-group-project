import { createRoot } from 'react-dom/client';
import {
  Navigate,
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>HomePage</h1>} />
        <Route path="home" element={<Navigate to={'/'} />} />

        <Route path="phones" element={<h1>Phones</h1>}>
          <Route path=":itemId?" element={<h1>PhonesItems</h1>} />
        </Route>

        <Route path="tablets" element={<h1>Tablets</h1>}>
          <Route path=":itemId?" element={<h1>TabletsItems</h1>} />
        </Route>

        <Route path="accessories" element={<h1>Acсessories</h1>}>
          <Route path=":itemId?" element={<h1>AcсessoriesItems</h1>} />
        </Route>

        <Route path="favorites" element={<h1>Favorites</h1>} />
        <Route path="cart" element={<h1>Cart</h1>} />
        <Route path="*" element={<h1>NotFoundPage</h1>} />
      </Route>
    </Routes>
  </Router>,
);
