import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage';
import { About } from './modules/About';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { PhonesContextProvider } from './controllers/phones';
import { Catalog } from './modules/Catalog';
import { ProductsContextProvider } from './controllers/products';
import { Test } from './components/Favorites';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <PhonesContextProvider>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to={'/'} />} />

            <Route path="phones/:itemId" element={<About />} />
            <Route path="phones" element={<Catalog />}/>

            <Route path="tablets/:itemId" element={<About />} />
            <Route path="tablets" element={<h1>Tablets</h1>} />

            <Route path="accessories/:itemId" element={<About />} />
            <Route path="accessories" element={<h1>Acсessories</h1>} />

            <Route path="favorites" element={<Test />} />
            <Route path="cart" element={<h1>Cart</h1>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ProductsContextProvider>
    </PhonesContextProvider>
  </Router>,
);
