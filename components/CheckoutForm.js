// // components/CheckoutForm.js
// import { useState } from 'react';
// import { useCart } from '../context/CartContext';

// export default function CheckoutForm() {
//   const { cart } = useCart();
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     city: '',
//     zip: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate order processing
//     alert('Order placed successfully!');
//     // Here you could clear the cart or redirect to a confirmation page.
//   };

//   const calculateTotal = () => {
//     return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
//         <div className="mb-4">
//           <label className="block text-gray-700">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">City</label>
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">ZIP Code</label>
//           <input
//             type="text"
//             name="zip"
//             value={formData.zip}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="text-right mt-4">
//           <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
//             Place Order
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CheckoutForm() {
  const { cart, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    alert('Order placed successfully!');

    // Clear the cart after placing the order
    dispatch({ type: 'CLEAR_CART' });

    // Optionally redirect or clear form data here
    setFormData({
      name: '',
      address: '',
      city: '',
      zip: '',
      email: '',
    });
  };

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="text-right mt-4">
          <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

