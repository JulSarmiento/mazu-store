import React, {useState} from 'react';

import CartContext from '../Context/CartContext';

const DEFAULT_CART = {products: []}

const CartProvider = ({children}) => {
	
	const [cart, setCart] = useState(DEFAULT_CART);

	const {products} = cart;

	const getUUID = (product, options) => {
		return Buffer.from(JSON.stringify({product, options})).toString('base64')
	}

	/**
	 * This function validates if an item already exists in the cart list.
	 * @param {string} itemId 
	 * @returns         
	 */
	const isInCart = (itemId) => products.findIndex(({uuid}) => itemId === uuid);

	/**
	 * This functon add a new item to the cart list
	 * @param {object} product 
	 * @param {number} counter 
	 */
	const addItem = (product, counter, options) => {
		const uuid = getUUID(product, options);

		const index = isInCart(uuid);

		if(index >= 0){
			products[index].counter += counter;
		} else {
			products.push({uuid, product, counter, ...options});
		}
		 
		setCart({...cart, products });
	};

	const updateProduct = (index, newProduct) => {
		products[index] = newProduct;

		setCart({...cart, products});
	}

	const removeItem = (itemId) => {
		const index = isInCart(itemId);

		if (index >= 0 ) {
			products.splice(index, 1);
			setCart({...cart, products});
		}
	};

	const clear = () => setCart({products: []});

	const getTotalProducts = () => products.reduce( (totalItems, product) => totalItems+=product.counter, 0);

	const getTotalPrice = () => products.reduce( (price, {product, counter}) => price+=counter*product.price, 0);

	const calculateShipping = (price) => {
		if(price < 350000){
			return 15000;
		}

		if(price < 450000) {
			return 12000;
		} 
		
		return 0;
	}

	return <CartContext.Provider value={{
		cart,
		addItem, 
		removeItem,
		clear,
		isInCart,
		updateProduct,
		getTotalProducts,
		getTotalPrice,
		calculateShipping
	}}>
		{children}
		<pre style={{display: "none"}}>{JSON.stringify(cart, undefined, 2)}</pre>
	</CartContext.Provider>;
}

export default CartProvider;



