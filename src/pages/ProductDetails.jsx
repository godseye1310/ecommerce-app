import React, { useEffect } from 'react';
import ProductInformation from '../components/Products/ProductInformation';
import { productsArr } from './Products';
import Cart from '../components/Cart/Cart';
import useCartDisplay from '../store/cart-display-context';

const ProductDetails = () => {
	const { cartDisplay, handleCartDisplay } = useCartDisplay();
	useEffect(() => {
		return () => {
			if (cartDisplay) handleCartDisplay(false);
		};
	}, [cartDisplay, handleCartDisplay]);

	return (
		<>
			<ProductInformation productData={productsArr} />
			<Cart />
		</>
	);
};

export default ProductDetails;
