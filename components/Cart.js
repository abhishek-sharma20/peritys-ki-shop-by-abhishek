// components/Cart.js
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
        <>
          <ul>
            {cart.items.map((item) => (
              <li key={item.id} className="border-b py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p>${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
            <Link href="/checkout">
              <a className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">
                Proceed to Checkout
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}


// import { useCart } from '../context/CartContext';
// import Link from 'next/link';

// export default function Cart() {
//   const { cart, dispatch } = useCart();

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', payload: id });
//   };

//   const calculateTotal = () => {
//     return cart.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
//       {cart.items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cart.items.map((item) => (
//               <li key={item.id} className="border-b py-4 flex justify-between items-center">
//                 <div className="flex items-center">
//                   <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
//                   <div>
//                     <h2 className="text-lg font-bold">{item.title}</h2>
//                     <p>
//                       ${item.price} x {item.quantity}
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <button onClick={() => removeFromCart(item.id)} className="text-red-500">
//                     Remove
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="text-right mt-4">
//             <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
//             <Link href="/checkout">
//               <a className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded">
//                 Proceed to Checkout
//               </a>
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


