import React, {useContext, useState} from "react";
import { ListGroup, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext"
import Formatter from "../../Utilities/MoneyFormater";
import ItemCount from "../ItemCount";
import "./index.css"

export default function Cart() {

  const {cart, removeItem, clear} = useContext(CartContext);

  const {products, totalPrice}  = cart;

  const [counter, setCounter] = useState(1);
  
  let shipping;

  if(totalPrice < 200000){
    shipping = 12000;
  }
  else if(totalPrice < 350000) {
    shipping = 15000;
  } else if ( totalPrice > 450000 ) {
    shipping = 20000;
  } else {
    shipping = 0
  }

  const onAdd = (value) => {
    setCounter(counter + value) 
  };

  const payment = () => {
    alert('Gracias por su compra. A su correo llegaran notificaciones con los estados de su pedido.')
    clear();
  }

  return (

    //Carrito con opcion de agregar cantidades

    <div className="container mx-auto my-5 ">

      <h1 className="cart__title" >checkout</h1>

      <div className="checkout">
        <ListGroup className="card__container">
          {products.map( ({uuid, product, counter, size, type, complement}) => {
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
                    <ItemCount stock={product.stock} initial={counter} onAdd={onAdd}/>
                  </div>
                  <Badge variant="primary" className="mx-3 counter__badge">
                    {counter}
                  </Badge>
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
            <p>Envio: {Formatter(shipping)} COP </p>
            <p><strong>Total: {Formatter(parseInt(totalPrice + shipping))} COP</strong></p>
          </div>
          
          <Button className="my-2 btn" onClick={clear}>
            Vaciar Carrito
          </Button>
          <Link className="my-2 btn" onClick={payment} to="/">
            Proceder con el pago
          </Link>
          
        </div>

      </div>
 
      
   



    </div>

    


  )
}