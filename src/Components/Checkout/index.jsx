import React, {useContext} from "react";
import {Link} from "react-router-dom";
import CheckoutForm from "../CheckoutForm"
import CartContext from "../../Context/CartContext";

export default function Checkout(){
  const {cart, removeItem, clear, updateProduct, getTotalPrice, calculateShipping} = useContext(CartContext);

  const payment = () => {
    alert('Gracias por su compra. A su correo llegaran notificaciones con los estados de su pedido.')
    clear();
  }
  return (

    <div>
      <CheckoutForm/>
      <Link className="my-2 btn" onClick={payment} to="/">
        Proceder con el pago
      </Link>
    </div>
  )
}