import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

           <Link to="/" className="flex items-center gap-3">
          <img
            src="/meatzy1.png"
            alt="Meatzy Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-2xl font-extrabold tracking-wide text-yellow-400">
            Meatzy
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/products" className="hover:text-yellow-400">Products</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>

          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full
                       font-semibold hover:bg-yellow-500 transition"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-yellow-400 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-black rounded-xl p-6 space-y-4 text-center">
          <Link onClick={() => setOpen(false)} to="/" className="block hover:text-yellow-400">Home</Link>
          <Link onClick={() => setOpen(false)} to="/products" className="block hover:text-yellow-400">Products</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block hover:text-yellow-400">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-yellow-400">Contact</Link>

          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className="block bg-yellow-400 text-black py-3 rounded-full font-semibold"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
