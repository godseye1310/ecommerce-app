import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { CartDisplay } from './store/cart-display-context';

function App() {
	return (
		<>
			<CartDisplay>
				<Header />
				<Cart />
			</CartDisplay>
			<Products />
			<Footer />
		</>
	);
}

export default App;
