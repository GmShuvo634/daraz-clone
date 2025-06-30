import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { HomePage } from './pages/HomePage.tsx';
import { ProductDetailsPage } from './pages/ProductDetailsPage.tsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;