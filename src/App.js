import React from 'react';
import Products from './pages/Products';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <Navigate to="/products" replace /> },
			{ path: '/products', element: <Products /> },
			{ path: '/about', element: <About /> },
			{ path: '/home', element: <Home /> },
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
