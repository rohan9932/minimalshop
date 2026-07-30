export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden z-10 border border-[#c7c4d8] grid grid-cols-1 md:grid-cols-2">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-[#777587] hover:text-[#191c1d] bg-white/80 rounded-full p-1"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="bg-[#f3f4f5] aspect-square md:aspect-auto h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#777587] mb-1 block">
              {product.categoryLabel}
            </span>
            <h2 className="text-xl font-bold text-[#191c1d] mb-2">{product.name}</h2>
            <p className="text-lg font-medium text-[#3525cd] mb-4">${product.price}</p>
            <p className="text-xs text-[#464555] leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-[#111827] text-white py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#3525cd] transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={onClose}
              className="w-full border border-[#c7c4d8] text-[#464555] py-2.5 rounded text-xs font-semibold hover:bg-[#f3f4f5]"
            >
              Close Quick View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
