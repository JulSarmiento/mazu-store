import React, {useContext} from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext"
import Formatter from "../../Utilities/MoneyFormater";
import ItemCount from "../ItemCount";
import "./index.css"

export default function Cart() {

  const {cart, removeItem, clear, updateProduct, getTotalPrice, calculateShipping} = useContext(CartContext);

  const {products}  = cart;

  const onAdd = (index, value) => {
    let currentProduct = products[index];

    currentProduct.counter += value;

    updateProduct(index, currentProduct);
  };

  const totalPrice = getTotalPrice();

  const shipping = calculateShipping(totalPrice);

  return (

    //Carrito con opcion de agregar cantidades

    <div className="container mx-auto my-5 ">

      <h1 className="cart__title" >checkout</h1>

      {products.length === 0 ? 
        <div className="d-flex gap-2">
          <p> Carrito Vacio. Para comprar visita nuestra</p>
          <Link to="../Categories" className="cart__link mt-1">Store</Link>
        </div>

      :

        <div className="checkout">
          <ListGroup className="card__container">
            {products.map( ({uuid, product, counter, size, type, complement}, index) => {
              return (
                <ListGroup.Item key={uuid} className="d-flex my-2 p-3 gap-3 justify-content-between align-items-center flex-column  flex-md-row   card__shadow">

                  <div className="d-flex gap-3">
                    <img src={product.picture} className="rounded product__image" alt="Imagen del producto"/>
                    <div>
                      <p className="fw-bold">{product.line} {product.color} {type} {size ? `Talla: ${size}` : null} {complement ? `(${complement})` : null} </p>
                      <p>{Formatter(product.price)} COP</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center my-auto flex-row counter">
                    <div className="counter">
                      <ItemCount stock={product.stock} initial={counter} onAdd={(value) => onAdd(index, value)}/>
                    </div>
                    <Button className="delete-icon" onClick={() => removeItem(uuid)} >
                      <i className="fas fa-trash" ></i>
                    </Button> 
                  </div>
                </ListGroup.Item>
              )
            })}
              
          </ListGroup>
      
          <div className="my-3 d-flex flex-column cart__footerContainer" >
            <h2>Resumen:</h2>
            
            <div className="my-3 container">
              <p >Subtotal: {Formatter(parseInt(totalPrice))} COP</p>
              {shipping === 0 ? <p>Envio gratis</p> : <p>Envio:{Formatter(shipping)}</p> } 
              
              <p><strong>Total: {Formatter(parseInt(totalPrice + shipping))} COP</strong></p>
            </div>
            
            <Button className="my-2 btn" onClick={clear}>
              Vaciar Carrito
            </Button>
            <Link className="my-2 btn" to="/Checkout">
              Proceder con el pago
            </Link>
            
          </div>

      </div>

  }
 </div>

)}