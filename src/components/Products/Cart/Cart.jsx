import React from 'react';
import CartItem from './CartItem';
import useCartDisplay from '../../../store/cart-display-context';
import useCart from '../../../store/cart-context';

const Cart = () => {
	const { cartDisplay, handleCartDisplay } = useCartDisplay();

	const { cart, total } = useCart();

	const closeCart = () => {
		handleCartDisplay(false);
	};

	return (
		<div
			className={`bg-gray-900 min-w-[610px] text-white fixed top-[68px] right-0 h-full p-5 z-20 transition ease-linear duration-300 ${
				cartDisplay ? 'translate-x-0 scale-x-100' : 'translate-x-full scale-x-0'
			} max-sm:min-w-full max-sm:p-1`}
		>
			<h1 className="pb-4 pt-6 text-center font-bold text-4xl">CART</h1>
			<button
				type="button"
				className=" mr-2 font-bold text-2xl bg-red-600 bg-opacity-50 hover:bg-opacity-85 px-3 py-1 rounded-md absolute top-3 right-2"
				onClick={closeCart}
			>
				X
			</button>
			<div>
				<div className="relative overflow-x-auto">
					<table className="w-full text-sm text-center text-white ">
						<thead className="text-gray-400 uppercase bg-gray-700 ">
							<tr>
								<th className="px-8 py-3 max-sm:px-2 text-left">Items</th>
								<th className="px-6 py-3 max-sm:px-2">Price</th>
								<th className="px-6 py-3 max-sm:px-2">Quantity</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item) => {
								return (
									<CartItem
										key={item.id}
										id={item.id}
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

			<div className="flex justify-end max-sm:justify-around text-2xl mx-5 my-2 py-4 border-t-2 border-gray-600">
				<span className="mr-5 font-bold">Total</span>
				<span className="ml-5">
					$<span>{total}</span>
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
