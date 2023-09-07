import { Routes, Route } from 'react-router-dom';

import Layout from './common/Layout';
import Product from './domain/Product/Product';
import Home from './domain/Home/Home';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/product'
          element={<Product />}
        />

        <Route
          path='/product/edit'
          element={<Product />}
        />
      </Route>
    </Routes>
  );
};

export default App;
