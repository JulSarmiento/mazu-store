import React, {useState} from 'react';

import CartContext from '../Context/CartContext';

const DEFAULT_CART = {totalItems: 0, products: [], totalPrice: 0}

const CartProvider = ({children}) => {
	const [cart, setCart] = useState(DEFAULT_CART);

	const isInCart = (itemId) => {
		const {products} = cart

		return products.findIndex( ({product}) => itemId == product.colId);
	}

	const addItem = (product, counter) => {

		let { totalItems, products, totalPrice } = cart;
		const validator = isInCart(product.colId);

		if(validator >= 0){
			products[validator].counter += counter;
		} else {
			products.push({product, counter});
		}

		totalItems+= counter;
		totalPrice+= product.price*counter;

		setCart({...cart, totalItems, products, totalPrice });
		
	};

	const removeItem = (itemId) => {

		const {products} = cart

		const auxArray = products.filter((product) => product.colId !== itemId)

		setCart({...cart, products:auxArray});


	};

	const clear = () => {
		setCart({totalItems: 0, products: [], totalPrice: 0})
	};

	return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>{children}</CartContext.Provider>;
}

export default CartProvider;



