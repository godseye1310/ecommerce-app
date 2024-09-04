import React, { useEffect } from 'react';
import ProductList from '../components/Products/ProductList';
import Cart from '../components/Cart/Cart';
import useCartDisplay from '../store/cart-display-context';

export const productsArr = [
	{
		title: 'Colors',
		price: 100,
		imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
	},
	{
		title: 'Black and white Colors',
		price: 50,
		imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
	},
	{
		title: 'Yellow and Black Colors',
		price: 70,
		imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
	},
	{
		title: 'Blue Color',
		price: 100,
		imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
	},
];

const Products = () => {
	const { cartDisplay, handleCartDisplay } = useCartDisplay();
	useEffect(() => {
		return () => {
			if (cartDisplay) handleCartDisplay(false);
		};
	}, [cartDisplay, handleCartDisplay]);

	return (
		<>
			<ProductList productsArr={productsArr} />
			<Cart />
		</>
	);
};

export default Products;
