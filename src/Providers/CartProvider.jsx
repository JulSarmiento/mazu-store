import React, {useState} from 'react';
import { useEffect } from 'react';

import CartContext from '../Context/CartContext';

// Set default cart based on local storaged or uses the default value
const DEFAULT_CART = JSON.parse(localStorage.getItem('cart') || '{"products": []}');

/**
 * Cart Context provider component
 * 
 * @component
 * @param {Object<string, any>} props
 * @param {React.Component} children
 * @returns {React.FunctionComponentElement}
 */
const CartProvider = ({children}) => {
	// Cart state used as context
	const [cart, setCart] = useState(DEFAULT_CART);

	const {products} = cart;

	/**
	 * Updates local storage cart item each cart object update.
	 * 
	 */
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	/**
	 * Generates unique id based on product id and its props on the cart list.
	 * 
	 * @param {object} product
	 * @param {object} options 
	 * @returns         
	 */
	const getUUID = (product, options) => {
		return Buffer.from(JSON.stringify({product, options})).toString('base64')
	}

	/**
	 * This function validates if an item already exists in the cart list.
	 * 
	 * @param {string} itemId 
	 * @returns         
	 */
	const isInCart = (itemId) => products.findIndex(({uuid}) => itemId === uuid);

	/**
	 * This functon add a new item to the cart list
	 * 
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

	/**
	 * Set a product on specified index.
	 * 
	 * @param {number} index 
	 * @param {object} newProduct 
	 */
	const updateProduct = (index, newProduct) => {
		products[index] = newProduct;

		setCart({...cart, products});
	}

	/**
	 * Removes item in cart based on product id
	 * 
	 * @param {string} itemId 
	 */
	const removeItem = (itemId) => {
		const index = isInCart(itemId);

		if (index >= 0 ) {
			products.splice(index, 1);
			setCart({...cart, products});
		}
	};

	/**
	 * Clear the cart and set with default value
	 * 
	 * @returns {undefined}
	 */
	const clear = () => setCart({products: []});

	/**
	 * Get total products in cart
	 * 
	 * @returns {number}
	 */
	const getTotalProducts = () => products.reduce( (totalItems, product) => totalItems+=product.counter, 0);

	/**
	 * Get total price in carts
	 * 
	 * @returns {number}
	 */
	const getTotalPrice = () => products.reduce( (price, {product, counter}) => price+=counter*product.price, 0);

	/**
	 * Calculates the shipping price
	 * 
	 * @param {number} price 
	 * @returns 
	 */
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
