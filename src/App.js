import React from 'react';
import Products from './components/Products/Products';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
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
			{ path: '/', element: <Navigate to="/products" replace /> },
			{ path: '/home', element: <Home /> },
			{ path: '/products', element: <Products /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
			{ path: '/products/:productID', element: <ProductDetails /> },
		],
	},
]);

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
