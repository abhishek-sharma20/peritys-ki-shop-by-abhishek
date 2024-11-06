import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false); // State to track if item is added

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setAdded(true); // Set 'added' state to true when item is added to the cart
    setTimeout(() => setAdded(false), 2000); // Reset the 'added' state after 2 seconds
  };

  return (
    <div className="border p-4 rounded-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      
      <button
        onClick={addToCart}
        className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>

      {/* Show a notification when the item is added to the cart */}
      {added && (
        <div className="mt-2 text-green-500 font-semibold">
          Item added to cart!
        </div>
      )}

      <Link href={`/product/${product.id}`} className="text-blue-500 underline block mt-2">
        View Details
      </Link>
    </div>
  );
}


// import Link from 'next/link';
// import { useCart } from '../context/CartContext';

// export default function ProductCard({ product }) {
//   const { dispatch } = useCart();

//   const addToCart = () => {
//     console.log('Adding to cart', product);  // Debugging: Check if this logs when the button is clicked
//     dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
//   };

//   return (
//     <div className="border p-4 rounded-lg">
//       <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
//       <h2 className="text-xl font-bold">{product.title}</h2>
//       <p className="text-gray-700">${product.price}</p>
//       <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
//         Add to Cart
//       </button>
//       <Link href={`/product/${product.id}`} className="text-blue-500 underline block mt-2">
//         View Details
//       </Link>
//     </div>
//   );
// }
