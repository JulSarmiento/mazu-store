import React, {useState} from 'react';

import CartContext from '../Context/CartContext';

const DEFAULT_CART = {totalItems: 0, products: [], totalPrice: 0}

const CartProvider = ({children}) => {
	
	const [cart, setCart] = useState(DEFAULT_CART);

	/**
	 * This function validates if an item already exists in the cart list.
	 * @param {number} itemId 
	 * @returns 
	 */
	const isInCart = (itemId) => {
		const {products} = cart

		return products.findIndex( ({product}) => itemId === product.colId);
	}

	/**
	 * This functon add a new item to the cart list
	 * @param {object} product 
	 * @param {number} counter 
	 */
	const addItem = (product, counter, options) => {

		let { totalItems, products, totalPrice } = cart;
		const validator = isInCart(product.colId, options);

		if(validator >= 0){
			products[validator].counter += counter;
		} else {
			products.push({product, counter, ...options});
		}

		totalItems+= counter;
		totalPrice+= product.price*counter;

		setCart({...cart, totalItems, products, totalPrice });
		
	};

	const removeItem = (itemId) => {
		let {products, totalItems, totalPrice} = cart

		const index = isInCart(itemId);

		console.log('Removing index', itemId, index)
		if (index >= 0 ) {
			const {product, counter} = products[index];

			totalItems -= counter
			totalPrice -= product.price * counter;
			
			products.splice(index, 1);
			setCart({...cart, products, totalItems, totalPrice});
		}
	};

	const clear = () => {
		setCart({totalItems: 0, products: [], totalPrice: 0})
	};

	return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>{children}</CartContext.Provider>;
}

export default CartProvider;



