import React, { lazy, Suspense } from 'react';
// import Products from './pages/Products';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
// import About from './pages/About';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import ProductDetails from './pages/ProductDetails';
// import LoginPage from './pages/LoginPage';
import useAuth from './store/auth-context';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';
import SuspenseLoader from './components/UI/SuspenseLoader';
import SuspenseWithDelay from './store/suspense-delay';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

function App() {
	const { isLoggedIn } = useAuth();

	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			id: 'root',
			children: [
				{ index: true, element: <Navigate to="/home" replace /> },
				{
					path: '/home',
					element: (
						<Suspense fallback={<SuspenseLoader />}>
							<SuspenseWithDelay>
								<Home />
							</SuspenseWithDelay>
						</Suspense>
					),
				},
				{
					path: '/about',
					element: (
						<Suspense fallback={<SuspenseLoader />}>
							<SuspenseWithDelay>
								<About />
							</SuspenseWithDelay>
						</Suspense>
					),
				},
				{
					path: '/contact',
					element: (
						<Suspense fallback={<SuspenseLoader />}>
							<SuspenseWithDelay>
								<Contact />
							</SuspenseWithDelay>
						</Suspense>
					),
				},
				{
					path: '/login',
					element: (
						<Suspense fallback={<SuspenseLoader />}>
							<SuspenseWithDelay>
								{!isLoggedIn ? <LoginPage /> : <Navigate to="/products" replace />}
							</SuspenseWithDelay>
						</Suspense>
					),
				},
				{
					path: '/products',
					element: (
						<Suspense fallback={<SuspenseLoader />}>
							<SuspenseWithDelay>
								{isLoggedIn ? <Products /> : <Navigate to="/login" replace />}
							</SuspenseWithDelay>
						</Suspense>
					),
				},
				{
					path: '/products/:productID',
					element: (
						<Suspense fallback={<SuspenseLoader />}>
							<SuspenseWithDelay>
								{isLoggedIn ? <ProductDetails /> : <Navigate to="/login" replace />}
							</SuspenseWithDelay>
						</Suspense>
					),
				},
				{ path: '*', element: <NotFoundPage /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
