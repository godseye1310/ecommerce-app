import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Cart from '../components/Cart/Cart';
import { CartProvider } from '../store/cart-context';
import { CartDisplayProvider } from '../store/cart-display-context';

const RootLayout = () => {
	return (
		<>
			<main className="relative min-h-svh">
				<CartProvider>
					<CartDisplayProvider>
						<Header />
						<Cart />
						<Outlet />
					</CartDisplayProvider>
				</CartProvider>
				<Footer />
			</main>
		</>
	);
};

export default RootLayout;

// {
// 	/* <main className="relative min-h-svh">
// 				<CartProvider>
// 					<CartDisplayProvider>
// 						<Header />
// 						<Cart />
// 					</CartDisplayProvider>
// 					<Products />
// 				</CartProvider>
// 				<Footer />
// 			</main> */
// }
