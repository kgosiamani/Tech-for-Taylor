import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder pages for now
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Delivery from './pages/Delivery';
import TradeIn from './pages/TradeIn';
import Cart from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="trade-in" element={<TradeIn />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<div className="container section"><h1>404 Not Found</h1></div>} />
      </Route>
    </Routes>
  );
}


export default App;
