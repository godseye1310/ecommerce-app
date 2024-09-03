import React from 'react';
// import Header from './layout/Header';
// import Footer from './layout/Footer';
import Products from './components/Products/Products';
// import Cart from './components/Cart/Cart';
// import { CartDisplayProvider } from './store/cart-display-context';
// import { CartProvider } from './store/cart-context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import About from './components/CoverPages/About';
import Home from './components/CoverPages/Home';
import Contact from './components/Contact/Contact';
import ProductDetails from './components/Products/ProductPage/ProductDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/home', element: <Home /> },
			{ path: '/products', element: <Products /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '/products/:id', element: <ProductDetails /> },
		],
	},
]);

// return

function App() {
	return <RouterProvider router={router} />;
}

export default App;

// {/* <>
// 			<main className="relative min-h-svh">
// 				<CartProvider>
// 					<CartDisplayProvider>
// 						<Header />
// 						<Cart />
// 					</CartDisplayProvider>
// 					<Products />
// 				</CartProvider>
// 				<Footer />
// 			</main>
// 		</> */}
