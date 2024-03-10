// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import ProductsManagement from './Components/ProductsManagement';
import OrdersManagement from './Components/OrdersManagement';
import Header from './Components/Header'; // Import the Header component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <nav className="navbar">
          {/* Dashboard link with icon */}
          <NavLink to="/" activeClassName="active" exact>
            <span className="material-symbols-outlined">team_dashboard</span> Dashboard
          </NavLink>
          {/* Products link with icon */}
          <NavLink to="/products" activeClassName="active">
            <span className="material-symbols-outlined">inventory_2</span> Products
          </NavLink>
          {/* Orders link with icon */}
          <NavLink to="/orders" activeClassName="active">
            <span className="material-symbols-outlined">order_approve</span> Orders
          </NavLink>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
