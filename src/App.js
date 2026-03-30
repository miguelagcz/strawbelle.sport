import React from 'react';
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />
         <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1F2937', // gris oscuro
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '20px',
              padding: '16px',
            },
          }}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
