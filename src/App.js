import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { CartDisplayProvider } from './store/cart-display-context';
import { CartProvider } from './store/cart-context';

function App() {
	return (
		<>
			<main className="relative min-h-svh">
				<CartProvider>
					<CartDisplayProvider>
						<Header />
						<Cart />
					</CartDisplayProvider>
					<Products />
				</CartProvider>
				<Footer />
			</main>
		</>
	);
}

export default App;
