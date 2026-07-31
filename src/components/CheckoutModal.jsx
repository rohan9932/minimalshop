export default function CheckoutModal({
  isOpen,
  onClose,
  checkoutStep,
  formData,
  setFormData,
  grandTotal,
  onSubmit,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
      />

      <div className="relative bg-white w-full max-w-lg rounded-lg shadow-2xl p-6 md:p-8 z-10 border border-[#c7c4d8]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#777587] hover:text-[#191c1d]"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {checkoutStep === "form" && (
          <form onSubmit={onSubmit}>
            <h2 className="text-xl font-bold text-[#191c1d] mb-1">
              Complete Order
            </h2>
            <p className="text-xs text-[#777587] mb-6">
              Enter your shipping details below
            </p>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[#191c1d] font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full p-2.5 border border-[#c7c4d8] rounded text-sm outline-none focus:border-[#3525cd]"
                />
              </div>

              <div>
                <label className="block text-[#191c1d] font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2.5 border border-[#c7c4d8] rounded text-sm outline-none focus:border-[#3525cd]"
                />
              </div>

              <div>
                <label className="block text-[#191c1d] font-semibold mb-1">
                  Shipping Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full p-2.5 border border-[#c7c4d8] rounded text-sm outline-none focus:border-[#3525cd]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#191c1d] font-semibold mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full p-2.5 border border-[#c7c4d8] rounded text-sm outline-none focus:border-[#3525cd]"
                  />
                </div>
                <div>
                  <label className="block text-[#191c1d] font-semibold mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData({ ...formData, postalCode: e.target.value })
                    }
                    className="w-full p-2.5 border border-[#c7c4d8] rounded text-sm outline-none focus:border-[#3525cd]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-[#191c1d] font-semibold mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, paymentMethod: "card" })
                    }
                    className={`p-2.5 border rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                      formData.paymentMethod === "card"
                        ? "border-[#3525cd] bg-[#3525cd]/5 text-[#3525cd]"
                        : "border-[#c7c4d8] text-[#777587]"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      credit_card
                    </span>
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, paymentMethod: "applepay" })
                    }
                    className={`p-2.5 border rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                      formData.paymentMethod === "applepay"
                        ? "border-[#3525cd] bg-[#3525cd]/5 text-[#3525cd]"
                        : "border-[#c7c4d8] text-[#777587]"
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, paymentMethod: "googlepay" })
                    }
                    className={`p-2.5 border rounded text-xs font-semibold flex items-center justify-center gap-1 ${
                      formData.paymentMethod === "googlepay"
                        ? "border-[#3525cd] bg-[#3525cd]/5 text-[#3525cd]"
                        : "border-[#c7c4d8] text-[#777587]"
                    }`}
                  >
                    GPay
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#c7c4d8] flex justify-between items-center">
              <div>
                <span className="text-xs text-[#777587] block">
                  Total Amount
                </span>
                <span className="text-lg font-bold text-[#191c1d]">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
              <button
                type="submit"
                className="bg-[#111827] text-white px-6 py-3 rounded text-sm font-bold hover:bg-[#3525cd] transition-colors"
              >
                Pay & Confirm
              </button>
            </div>
          </form>
        )}

        {checkoutStep === "processing" && (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-[#3525cd] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#191c1d]">
              Processing Payment
            </h3>
            <p className="text-xs text-[#777587]">
              Please wait while we secure your order...
            </p>
          </div>
        )}

        {checkoutStep === "success" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="text-xl font-bold text-[#191c1d] mb-1">
              Order Confirmed!
            </h3>
            <p className="text-xs text-[#777587] mb-6">
              Thank you for shopping at MinimalShop. A confirmation receipt has
              been sent to{" "}
              <span className="font-semibold text-[#191c1d]">
                {formData.email}
              </span>
              .
            </p>
            <button
              onClick={onClose}
              className="bg-[#111827] text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#3525cd] transition-colors"
            >
              Back to Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
