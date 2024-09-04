import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { CartProvider } from '../../store/cart-context';
import { CartDisplayProvider } from '../../store/cart-display-context';

const RootLayout = () => {
	return (
		<>
			<main className="relative min-h-svh">
				<CartProvider>
					<CartDisplayProvider>
						<Header />
						<div className=" pb-6">
							<Outlet />
						</div>
					</CartDisplayProvider>
				</CartProvider>
				<Footer />
			</main>
		</>
	);
};

export default RootLayout;
