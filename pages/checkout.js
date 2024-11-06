// export default function Checkout() {
//     return (
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-4">Checkout</h1>
//         <form>
//           <label className="block mb-2">Shipping Address</label>
//           <input type="text" className="w-full border p-2 mb-4" />
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//             Complete Purchase
//           </button>
//         </form>
//       </div>
//     );
//   }
  
import { useState } from 'react';

export default function Checkout() {
  const [formData, setFormData] = useState({
    shippingAddress: '',
  });
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order processing here
    alert('Order placed successfully!');
    setIsOrderComplete(true);

    // You can also clear the form here if necessary
    // setFormData({ shippingAddress: '' });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {/* Display success message after order is placed */}
      {isOrderComplete ? (
        <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded">
          <p>Order placed successfully! Thank you for your purchase.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Shipping Address</label>
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Complete Purchase
          </button>
        </form>
      )}
    </div>
  );
}
