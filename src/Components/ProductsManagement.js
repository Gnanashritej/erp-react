import React, { useState } from 'react';
import ProductsList from './ProductsList';
import ProductForm from './ProductForm';

const ProductsManagement = () => {
  // Mock data array
  const [products, setProducts] = useState([
    { id: 1, name: 'Iphone 13', category: 'Mobile', price: 80000, stockQuantity: 10 },
    { id: 2, name: 'Oneplus nord buds', category: 'Headset', price: 3500, stockQuantity: 40 },
    { id: 3, name: 'Dell Alienware', category: 'Laptops', price: 150000, stockQuantity: 3 }
  ]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleAddProduct} />
      {/* Add space */}
      <div style={{ marginTop: '3rem' }}></div>
      {/* Pass mock data as a prop */}
      <ProductsList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductsManagement;
