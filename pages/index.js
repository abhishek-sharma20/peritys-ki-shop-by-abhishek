import { fetchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const products = await fetchProducts();
  return { props: { products } };
}
