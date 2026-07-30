export default function ProductCard({ product, onAddToCart, onQuickView }) {
  return (
    <div className="group product-card-hover flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f3f4f5] rounded border border-transparent hover:border-[#c7c4d8] transition-all duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
          onClick={() => onQuickView(product)}
        />

        {/* Add to Cart Overlay Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="add-to-cart-btn absolute bottom-4 left-4 right-4 bg-white text-[#191c1d] py-3 text-xs font-bold shadow-lg opacity-0 translate-y-4 transition-all duration-300 hover:bg-[#111827] hover:text-white rounded"
        >
          Add to Cart
        </button>
      </div>

      {/* Metadata */}
      <div className="mt-4 flex flex-col flex-1">
        <p className="text-[11px] font-semibold tracking-wider text-[#777587] mb-1 uppercase">
          {product.categoryLabel}
        </p>
        <div className="flex justify-between items-start">
          <h3
            onClick={() => onQuickView(product)}
            className="text-base font-medium text-[#191c1d] hover:text-[#3525cd] transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>
          <span className="text-base font-medium text-[#191c1d] ml-2 whitespace-nowrap">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
