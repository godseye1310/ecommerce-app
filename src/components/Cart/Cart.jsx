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

	// const myCart =
	return (
		<div
			className={`bg-gray-600 box-border overflow-x-auto text-white fixed top-16 right-0 h-full p-5 z-20 ${
				cartDisplay ? '' : 'hidden'
			}`}
		>
			<div className="flex justify-end">
				<button
					type="button"
					className=" mr-2 font-bold text-2xl bg-red-500 px-3 py-1 rounded-sm "
					onClick={closeCart}
				>
					X
				</button>
			</div>

			<h1 className="py-4 text-center font-bold text-xl">CART</h1>
			<div>
				<div class="relative overflow-x-auto">
					<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th className="px-6 py-3">Items</th>
								<th className="px-6 py-3">Price</th>
								<th className="px-6 py-3">Quantity</th>
							</tr>
						</thead>
						<tbody>
							{cartElements.map((item) => {
								return (
									<CartItem
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
			<div className="flex justify-end text-2xl mx-5">
				<span className="mr-5 font-bold">Total</span>
				<span className="ml-5">
					$<span>0</span>
				</span>
			</div>
			<div className="flex justify-center mt-6">
				<button
					type="button"
					className="py-2 px-5 font-semibold text-2xl bg-green-600 rounded-md hover:bg-blue-600"
				>
					PURCHASE
				</button>
			</div>
		</div>
	);
};

export default Cart;
