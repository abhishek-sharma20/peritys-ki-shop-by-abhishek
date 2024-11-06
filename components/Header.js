import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-red-800 text-white">
      <Link href="/" className="text-lg font-bold">Peritys-ki-Shop</Link>
      <nav>
        <Link href="/cart" className="ml-4">Cart</Link>
        <Link href="/login" className="ml-4">Login</Link>
      </nav>
    </header>
  );
}
