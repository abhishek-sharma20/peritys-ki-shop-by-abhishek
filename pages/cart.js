// import { useCart } from '../context/CartContext';

// export default function Cart() {
//   const { cart, dispatch } = useCart();

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
//       {cart.items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.items.map(item => (
//             <li key={item.id} className="border-b py-4 flex justify-between">
//               <span>{item.title}</span>
//               <span>${item.price}</span>
//               <button onClick={() => removeFromCart(item.id)} className="text-red-500">
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }


import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.items.map(item => (
            <li key={item.id} className="border-b py-4 flex justify-between">
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.items.length > 0 && (
        <div className="mt-4">
          <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
          <Link href="/checkout">
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded inline-block">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
