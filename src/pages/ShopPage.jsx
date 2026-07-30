import ProductCard from '../components/ProductCard.jsx';

export default function ShopPage({
  filteredProducts,
  onAddToCart,
  onQuickView
}) {
  return (
    <div>
      {/* Hero / Filter Header */}
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#3525cd] mb-2 block">
          COLLECTION 2024
        </span>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#191c1d] max-w-2xl leading-tight">
          Essential Pieces for the Modern Lifestyle
        </h1>
      </div>

      {/* Product Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </div>
  );
}
