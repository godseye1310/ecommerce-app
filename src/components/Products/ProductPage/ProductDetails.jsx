import React from 'react';
import { useParams } from 'react-router-dom';
import { productsArr } from '../ProductList';
import useCart from '../../../store/cart-context';

const ProductDetails = () => {
	const { id } = useParams();
	console.log(productsArr);
	const product = productsArr[id];
	console.log(product);

	const { addCartItem } = useCart();
	const handleAddCart = () => {
		const item = {
			// ...product,
			// id: id,
		};

		addCartItem(item);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
				<img
					src={product.imageUrl}
					alt={product.title}
					className="w-full h-64 object-cover rounded-md mb-4"
				/>
				<h1 className="text-2xl font-semibold text-gray-800 mb-2">{product.title}</h1>
				<p className="text-lg text-gray-600 mb-4">
					Price: <span className="font-medium">${product.price}</span>
				</p>
				<button
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
					type="button"
					onClick={handleAddCart}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductDetails;
