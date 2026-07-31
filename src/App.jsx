import { useState } from 'react';
import { PRODUCTS, INITIAL_CART_ITEMS } from './products.js';

// Components
import Header from './components/Header.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import QuickViewModal from './components/QuickViewModal.jsx';
import CheckoutModal from './components/CheckoutModal.jsx';
import Toast from './components/Toast.jsx';
import Footer from './components/Footer.jsx';

// Pages
import ShopPage from './pages/ShopPage.jsx';

export default function App() {
  // Cart State
  const [cart, setCart] = useState(INITIAL_CART_ITEMS);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals & Drawers
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('form'); // 'form', 'processing', 'success'
  const [toastMessage, setToastMessage] = useState('');

  // Checkout Form State
  const [formData, setFormData] = useState({
    fullName: 'Jane Doe',
    email: 'jane.doe@example.com',
    address: '123 Minimalist Way, Apt 4B',
    city: 'San Francisco',
    postalCode: '94103',
    paymentMethod: 'card'
  });

  // Helper Toast
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Cart Calculations
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const estimatedTax = subtotal > 0 ? 42.0 : 0;
  const grandTotal = subtotal + estimatedTax;

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.name === product.name);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: 'c_' + Date.now(),
            name: product.name,
            variant: product.categoryLabel,
            price: product.price,
            quantity: 1,
            image: product.image
          }
        ];
      }
    });
    showToast(`Added "${product.name}" to cart`);
    setIsCartOpen(true);
  };

  const updateQuantity = (index) => {
    setCart((prevCart) => {
      const updated = [...prevCart];
      const newQty = updated[index].quantity + 1;
      if (newQty <= 0) {
        updated.splice(index, 1);
      } else {
        updated[index].quantity = newQty;
      }
      return updated;
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    showToast('Item removed from cart');
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep('processing');
    setTimeout(() => {
      setCheckoutStep('success');
      setCart([]);
    }, 1500);
  };

  const handleResetFilters = () => {
    setSelectedCategory('ALL');
    setSearchQuery('');
  };

  const categories = [
    { id: 'ALL', label: 'All Products' },
    { id: 'LIVING', label: 'Living' },
    { id: 'APPAREL', label: 'Apparel' },
    { id: 'FOOTWEAR', label: 'Footwear' },
    { id: 'OFFICE', label: 'Office' },
    { id: 'ACCESSORIES', label: 'Accessories' },
    { id: 'KITCHEN', label: 'Kitchen' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-[#191c1d] selection:bg-[#3525cd] selection:text-white">
      {/* Toast Notification */}
      <Toast message={toastMessage} />

      {/* Top Navigation Bar */}
      <Header
        totalCartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Page View Router */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 md:px-10 py-10 md:py-14">
        <ShopPage
          filteredProducts={PRODUCTS}
          onAddToCart={handleAddToCart}
          onQuickView={(prod) => setQuickViewProduct(prod)}
        />
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        subtotal={subtotal}
        estimatedTax={estimatedTax}
        grandTotal={grandTotal}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
          setCheckoutStep('form');
        }}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        checkoutStep={checkoutStep}
        formData={formData}
        setFormData={setFormData}
        grandTotal={grandTotal}
        onSubmit={handleCheckoutSubmit}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
