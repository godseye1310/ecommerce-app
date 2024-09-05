import React from 'react';
import Products from './pages/Products';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import LoginPage from './pages/LoginPage';
import useAuth from './store/auth-context';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';

function App() {
	const { isLoggedIn } = useAuth();

	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{ path: '/', element: <Navigate to="/home" replace /> },
				{
					path: '/products',
					element: isLoggedIn ? <Products /> : <Navigate to="/login" replace />,
				},
				{ path: '/about', element: <About /> },
				{ path: '/home', element: <Home /> },
				{ path: '/contact', element: <Contact /> },
				{
					path: '/products/:productID',
					element: isLoggedIn ? <ProductDetails /> : <Navigate to="/login" replace />,
				},
				...(isLoggedIn ? [] : [{ path: '/login', element: <LoginPage /> }]),
				{ path: '*', element: <NotFoundPage /> },
			],
		},
	]);

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
