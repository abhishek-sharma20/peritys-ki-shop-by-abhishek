import { fetchProductById } from '../../utils/api';
import { useCart } from '../../context/CartContext';

export default function ProductDetail({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="container mx-auto py-8">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 mt-2">${product.price}</p>
      <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Add to Cart
      </button>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const product = await fetchProductById(params.id);
  return { props: { product } };
}
