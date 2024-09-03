import React, { useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart/Cart';
import useCartDisplay from '../../store/cart-display-context';

const Products = () => {
	const { cartDisplay, handleCartDisplay } = useCartDisplay();
	useEffect(() => {
		return () => {
			if (cartDisplay) handleCartDisplay(false);
		};
	}, [cartDisplay, handleCartDisplay]);
	return (
		<>
			<ProductList />
			<Cart />
		</>
	);
};

export default Products;
