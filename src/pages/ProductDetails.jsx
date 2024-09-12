import React, { useEffect } from 'react';
import ProductInformation from '../components/Products/ProductInformation';
import { Navigate, useParams } from 'react-router-dom';
import { productsArr } from './Products'; //can fetch products from a database
import Cart from '../components/Cart/Cart';
import useCartDisplay from '../store/cart-display-context';

const ProductDetails = () => {
	const { cartDisplay, handleCartDisplay } = useCartDisplay();
	useEffect(() => {
		return () => {
			if (cartDisplay) handleCartDisplay(false);
		};
	}, [cartDisplay, handleCartDisplay]);

	const { productID } = useParams();
	// console.log(productsArr);
	// console.log(productID);
	const product = productsArr.find((item) => `cx${productsArr.indexOf(item)}ay` === productID);
	// console.log(product);
	if (!product) {
		return <Navigate to="/not-found" replace />;
	}

	return (
		<>
			<ProductInformation product={product} productID={productID} />
			<Cart />
		</>
	);
};

export default ProductDetails;
