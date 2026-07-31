# MinimalShop — React Shopping Cart

A simple, responsive shopping cart application built with React. It lets users browse a product grid, add items to a cart, adjust quantities, and see a live running total — all powered by React components and hooks.

**Live Demo:** [minimalshopcart.vercel.app](https://minimalshopcart.vercel.app/)

## Features

- **Product grid** — browse all available products in a responsive grid layout
- **Product details** — each card shows the product image, name, price, and category
- **Add to cart** — add any product to the shopping cart with one click
- **Quantity controls** — increase or decrease the quantity of any item already in the cart
- **Remove items** — remove a product from the cart entirely
- **Cart summary** — see the total number of items and the total price update live
- **Responsive design** — works smoothly across desktop, tablet, and mobile screens

## Project Structure

```
minimalshop/
├── src/
│   ├── components/
│   │   ├── CartDrawer.jsx      # Slide-out cart with items, quantity controls, totals
│   │   ├── CheckoutModal.jsx   # Checkout flow modal
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Header.jsx          # Site header / nav
│   │   ├── ProductCard.jsx     # Individual product card (image, name, price, category)
│   │   ├── QuickViewModal.jsx  # Product quick-view modal
│   │   └── Toast.jsx           # Toast/notification component
│   ├── pages/
│   │   └── ShopPage.jsx        # Main shop page (product grid + cart logic)
│   ├── App.jsx                 # Root app component
│   ├── main.jsx                # App entry point
│   ├── index.css               # Global styles
│   └── products.js             # Product data
├── index.html          # Vite entry HTML
├── metadata.json       # Project metadata
├── vite.config.js      # Vite configuration
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Tech Stack

- **React** — component-based UI
- **Vite** — fast dev server and build tool
- **React Hooks** — `useState` for managing product and cart state
- **CSS** — responsive, mobile-first styling (Flexbox / Grid)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rohan9932/minimalshop.git
cd minimalshop

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Vite will start a local dev server (by default at `http://localhost:5173`) with hot module reloading.

### Building for Production

```bash
npm run build
```

The optimized production build is output to the `dist/` folder.

### Previewing the Production Build

```bash
npm run preview
```

## How It Works

- Product data (id, name, price, category, image) is defined in `src/products.js` and rendered as a grid of `ProductCard` components on `ShopPage`.
- Cart state is managed with the `useState` hook in `ShopPage`/`App` and passed down to `CartDrawer` for display.
- Adding a product creates or updates an entry in the cart state; the quantity controls in `CartDrawer` increment/decrement that entry, and removing a product deletes it from the cart state.
- `QuickViewModal` shows expanded product details, `CheckoutModal` handles the checkout step, and `Toast` shows brief feedback (e.g. "Added to cart").
- The total item count and total price are derived from the cart state and recalculated automatically whenever it changes.

## Possible Future Improvements

- Persist cart state with `localStorage`
- Add product search and category filtering
- Add checkout/payment flow
- Migrate state management to `useReducer` or Context API for larger scale

## License

This project is open source and available under the [MIT License](LICENSE).
