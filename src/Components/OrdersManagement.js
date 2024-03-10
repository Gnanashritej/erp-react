import React, { useState } from 'react';
import OrdersList from './OrdersList';
import OrdersCalendar from './OrdersCalendar';

const OrdersManagement = () => {
  // Mock data array
  const [orders, setOrders] = useState([
    { id: 1, orderId: '12345', customerName: 'Gnana Shritej', orderDate: '2024-03-02', status: 'Pending', deliveryDate: '2024-03-15' },
    { id: 2, orderId: '67890', customerName: 'Vishal', orderDate: '2024-03-04', status: 'Shipped', deliveryDate: '2024-03-12' },
    { id: 3, orderId: '54321', customerName: 'Chetan Kumar', orderDate: '2024-03-06', status: 'Delivered', deliveryDate: '2024-03-09' }
  ]);

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <div>
      <OrdersList orders={orders} onDelete={handleDeleteOrder} />
      <div style={{ marginTop: '3em' }}></div> {/* Three lines of space */}
      <OrdersCalendar orders={orders} />
    </div>
  );
};

export default OrdersManagement;
