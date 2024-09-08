import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ productsArr }) => {
	return (
		<div className=" mt-5 flex items-center flex-col mb-2 pb-20">
			<h1 className="text-center text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 max-xs:text-3xl">
				Colors
			</h1>
			<ul className=" flex p-2 m-2 px-5 flex-wrap items-stretch justify-around max-w-[1000px]">
				{productsArr.map((item, i) => {
					return (
						<ProductItem
							key={i}
							product_id={`cx${i}ay`}
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductList;
