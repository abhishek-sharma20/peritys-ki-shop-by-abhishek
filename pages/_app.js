import '../styles/globals.css';
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';

export default function MyApp({ Component, pageProps }) {
  return (
    
    
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}
