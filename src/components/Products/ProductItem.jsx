import React from 'react';
import useCart from '../../store/cart-context';
import { Link } from 'react-router-dom';

const ProductItem = ({ title, price, imageUrl, id }) => {
	const { addCartItem } = useCart();

	const item = {
		id: id,
		title: title,
		price: +price,
		imageUrl: imageUrl,
		quantity: 1,
	};

	const handleAddCart = () => {
		addCartItem(item);

		// if (getItemResponse.data) {
		// 	let itemExists = false;
		// 	for (let data of getItemResponse.data) {
		// 		if (data.id === item.id) {
		// 			itemExists = true;
		// 			const updateItem = { ...item, quantity: data.quantity + 1 };
		// 			const putItemResponse = await axios.put(`${API_URL}/${data._id}`, updateItem);
		// 			console.log(putItemResponse.statusText);
		// 			break;
		// 		}
		// 	}
		// 	if (!itemExists) {
		// 		const response = await axios.post(API_URL, item);
		// 		console.log(response.data);
		// 		console.log(response.status, response.statusText, 'List POST Success');
		// 	}
		// }
	};

	return (
		<li className=" bg-black/25 rounded-sm mx-4 my-4 p-4">
			<Link to={`/products/${id}`}>
				<h3 className=" text-center font-bold text-2xl text-white/80 mb-4">{title}</h3>
				<div className=" overflow-hidden">
					<img
						className=" hover:scale-150 transition duration-300"
						src={imageUrl}
						alt="product img"
					/>
				</div>
			</Link>
			<div className="flex justify-between items-center mt-3">
				<span className="text-white font-bold text-xl">
					$<span>{price}</span>
				</span>
				<button
					className="rounded-sm bg-blue-500 hover:bg-sky-900 py-2 px-5 font-bold text-white"
					type="button"
					onClick={handleAddCart}
				>
					ADD TO CART
				</button>
			</div>
		</li>
	);
};

export default ProductItem;
