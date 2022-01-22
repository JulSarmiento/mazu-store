import React, {useContext, useState} from "react";
import { Button, Badge, Offcanvas, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import Formatter from "../../Utilities/MoneyFormater";
import "./index.css";


/**
 * This component manage the cart logic and return the cart icon with the counter badget
 * @returns {img}
 */
export default function CartWidget () {

  const {cart, removeItem, clear} = useContext(CartContext);

  const [show, setShow] = useState(false);

  const {totalItems, products, totalPrice} = cart;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button onClick={handleShow} className="cart__btn">
        <i className="fas fa-shopping-cart"></i> <Badge className="mx-1" bg="danger">{totalItems}</Badge>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="container cart">
        <Offcanvas.Header closeButton className="cart__titleContainer" >
          <Offcanvas.Title className="cart__title">Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {products.length === 0 ? 
              <div className="d-flex gap-2">
                <p> Carrito Vacio. Para comprar visita nuestra</p>
                <Link to="../Categories" className="cart__link mt-1">Store</Link>
              </div>
            : 
              <ListGroup as="ol" numbered className="gap-3">

              {products.map( ({uuid, product, counter, size, type, complement}) => {
                return (
                  <ListGroup.Item
                  key={uuid}
                  as="li"
                  className="d-flex justify-content-between align-items-start card__shadow"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{product.line} {product.color} {type} {size ? `Talla: ${size}` : null} {complement ? `(${complement})` : null}</div>
                      {Formatter(product.price)} COP
                    </div>
                    <Badge variant="primary" className="mx-3 counter__badge">
                      {counter}
                    </Badge>
                    <Button className="delete-icon" onClick={() => removeItem(uuid)} >
                      <i className="fas fa-trash" ></i>
                    </Button> 
                  </ListGroup.Item>
                )
              })}

            </ListGroup>
            }
         
          <div className="my-3 d-flex flex-column cart__footerContainer" >
            <Button className="my-2 btn" onClick={clear}>
              Vaciar Carrito
            </Button>
            <Link className="my-2 btn" to="/Cart">
              Checkout
            </Link>
            <p className="cart__title">Total: <strong>{Formatter(parseInt(totalPrice))} COP</strong></p>
          </div>

          
        </Offcanvas.Body>

        
      </Offcanvas>

      
    </>
  )
    
}

