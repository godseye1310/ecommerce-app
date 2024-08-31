import React from 'react';
import CartItem from './CartItem';
import useCartDisplay from '../../store/cart-display-context';

const cartElements = [
	{
		title: 'Colors',
		price: 100,
		imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
		quantity: 2,
	},
	{
		title: 'Black and white Colors',
		price: 50,
		imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
		quantity: 3,
	},
	{
		title: 'Yellow and Black Colors',
		price: 70,
		imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
		quantity: 1,
	},
];

const Cart = () => {
	const { cartDisplay, handleCartDisplay } = useCartDisplay();

	const closeCart = () => {
		handleCartDisplay(false);
	};

	return (
		<div
			className={`bg-gray-900 min-w-[610px] overflow-x-auto text-white fixed top-[68px] right-0 h-full p-5 z-20 transition ease-linear duration-300 ${
				cartDisplay ? 'translate-x-0 scale-x-100' : 'translate-x-full scale-x-0'
			} max-sm:min-w-full max-sm:p-1`}
		>
			<h1 className="pb-4 pt-6 text-center font-bold text-4xl">CART</h1>
			<button
				type="button"
				className=" mr-2 font-bold text-2xl bg-red-500 px-3 py-1 rounded-md absolute top-3 right-2"
				onClick={closeCart}
			>
				X
			</button>
			<div>
				<div className="relative overflow-x-auto">
					<table className="w-full text-sm text-center text-white ">
						<thead className="text-gray-400 uppercase bg-gray-700 ">
							<tr>
								<th className="px-6 py-3 max-sm:px-2">Items</th>
								<th className="px-6 py-3 max-sm:px-2">Price</th>
								<th className="px-6 py-3 max-sm:px-2">Quantity</th>
							</tr>
						</thead>
						<tbody>
							{cartElements.map((item, i) => {
								return (
									<CartItem
										key={i}
										title={item.title}
										price={item.price}
										imageUrl={item.imageUrl}
										quantity={item.quantity}
									/>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>

			<div className="flex justify-end max-sm:justify-around text-2xl mx-5">
				<span className="mr-5 font-bold">Total</span>
				<span className="ml-5">
					$<span>0</span>
				</span>
			</div>

			<div className="flex justify-center mt-6">
				<button
					type="button"
					className="py-2 px-5 font-semibold text-2xl bg-blue-600 rounded-md hover:bg-blue-900"
				>
					PURCHASE
				</button>
			</div>
		</div>
	);
};

export default Cart;
