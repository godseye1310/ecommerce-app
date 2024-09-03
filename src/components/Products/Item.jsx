import React from 'react';
import useCart from '../../store/cart-context';
import { Link } from 'react-router-dom';

const Item = ({ title, price, imageUrl, id }) => {
	const { addCartItem } = useCart();

	const handleAddCart = () => {
		const item = {
			id: id,
			title: title,
			price: +price,
			imageUrl: imageUrl,
			quantity: 1,
		};

		addCartItem(item);
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
			</Link>
		</li>
	);
};

export default Item;
