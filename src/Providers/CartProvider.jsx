import React, {useState} from 'react';

import CartContext from '../Context/CartContext';

const DEFAULT_CART = {totalItems: 0, products: [], totalPrice: 0}

const CartProvider = ({children}) => {
	
	const [cart, setCart] = useState(DEFAULT_CART);

	const getUUID = (product, options) => {
		return Buffer.from(JSON.stringify({product, options})).toString('base64')
	}

	/**
	 * This function validates if an item already exists in the cart list.
	 * @param {string} itemId 
	 * @returns         
	 */
	const isInCart = (itemId) => {
		const {products} = cart

		return products.findIndex(({uuid}) => itemId === uuid);
	}

	/**
	 * This functon add a new item to the cart list
	 * @param {object} product 
	 * @param {number} counter 
	 */
	const addItem = (product, counter, options) => {

		let { totalItems, products, totalPrice } = cart;
		
		const uuid = getUUID(product, options);

		const index = isInCart(uuid);

		if(index >= 0){
			products[index].counter += counter;
		} else {
			products.push({uuid, product, counter, ...options});
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

	return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
		{children}
		<pre style={{display: "none"}}>{JSON.stringify(cart, undefined, 2)}</pre>
	</CartContext.Provider>;
}

export default CartProvider;



