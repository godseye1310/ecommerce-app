import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { CartProvider } from '../../store/cart-context';
import { CartDisplayProvider } from '../../store/cart-display-context';

const RootLayout = () => {
	return (
		<main className=" bg-gray-100 w-full min-h-screen flex flex-col items-center">
			<CartProvider>
				<CartDisplayProvider>
					<Header />
					<div className=" relative w-full">
						<Outlet />
					</div>
					<Footer />
				</CartDisplayProvider>
			</CartProvider>
		</main>
	);
};

export default RootLayout;
