import { useState } from 'react';

export default function Header({
  totalCartCount,
  onOpenCart
}) {
  return (
    <header className="w-full top-0 sticky bg-[#f8f9fa]/90 backdrop-blur-md border-b border-[#c7c4d8]/40 z-40">
      <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-6 md:px-10 h-16">
        <button
          className="font-bold text-xl tracking-tight text-[#191c1d] hover:opacity-80 transition-opacity"
        >
          MinimalShop
        </button>

        {/* Cart Icon */}
        <button
          onClick={onOpenCart}
          className="p-2 text-[#191c1d] hover:text-[#3525cd] transition-colors relative"
          title="Shopping Cart"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          {totalCartCount > 0 && (
            <span className="absolute top-0 right-0 bg-[#3525cd] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalCartCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
