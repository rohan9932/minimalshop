export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveFromCart,
  subtotal,
  estimatedTax,
  grandTotal,
  onProceedToCheckout,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <aside className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col border-l border-[#c7c4d8] animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-[#c7c4d8] flex justify-between items-start bg-[#f8f9fa]">
          <div>
            <h2 className="text-xl font-bold text-[#191c1d]">Your Cart</h2>
            <p className="text-xs text-[#777587]">Manage your selected items</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#777587] hover:text-[#191c1d] p-1 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#777587] space-y-3 opacity-70 py-12">
              <span className="material-symbols-outlined text-5xl">
                shopping_bag
              </span>
              <p className="text-sm font-medium">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={item.id || index}
                className="flex gap-4 items-center border-b border-[#f3f4f5] pb-4"
              >
                <div className="w-20 h-20 bg-[#f3f4f5] rounded overflow-hidden flex-shrink-0 border border-[#c7c4d8]/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-[#191c1d] leading-tight">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => onRemoveFromCart(index)}
                      className="text-[#777587] hover:text-red-600 transition-colors"
                      title="Remove item"
                    >
                      <span className="material-symbols-outlined text-lg">
                        delete
                      </span>
                    </button>
                  </div>
                  <p className="text-xs text-[#777587] mb-2">{item.variant}</p>
                  <div className="flex justify-between items-center mt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#c7c4d8] rounded px-2 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(index, -1)}
                        className="text-[#777587] hover:text-[#3525cd] p-1"
                      >
                        <span className="material-symbols-outlined text-xs">
                          remove
                        </span>
                      </button>
                      <span className="px-3 text-xs font-semibold text-[#191c1d]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(index, 1)}
                        className="text-[#777587] hover:text-[#3525cd] p-1"
                      >
                        <span className="material-symbols-outlined text-xs">
                          add
                        </span>
                      </button>
                    </div>
                    <span className="text-sm font-medium text-[#191c1d]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#c7c4d8] bg-[#f8f9fa]">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs text-[#777587]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#777587]">
                <span>Estimated Tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#191c1d] pt-2 border-t border-[#c7c4d8]">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full bg-[#111827] text-white py-3.5 rounded font-bold text-sm hover:bg-black transition-all active:scale-[0.98] shadow-sm"
            >
              Proceed to Checkout
            </button>

            <div className="mt-4 flex flex-col items-center gap-3">
              <div className="flex gap-4 text-[#777587]">
                <span className="material-symbols-outlined text-lg">
                  receipt_long
                </span>
                <span className="material-symbols-outlined text-lg">
                  favorite
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-xs text-[#777587] hover:text-[#3525cd] underline transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
