import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold tracking-widest uppercase text-gray-900">
        Nanda Emporium
      </Link>
      <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-600">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <Link href="/collection" className="hover:text-black transition-colors">Collection</Link>
        <Link href="/about" className="hover:text-black transition-colors">About</Link>
        <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
      </div>
    </nav>
  )
}
