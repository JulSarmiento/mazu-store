import React, {useContext, useState} from "react";
import { Button, Badge, Offcanvas, ListGroup } from "react-bootstrap";
import CartContext from "../../Context/CartContext";
import Formatter from "../../Utilities/MoneyFormater";
import "./index.css";


/**
 * This component manage the cart logic and return the cart icon with the counter badget
 * @returns {img}
 */
export default function CartWidget () {

  const {cart, removeItem, clear} = useContext(CartContext);

  const {totalItems, products, totalPrice} = cart;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Button onClick={handleShow} className="cart__btn">
        <i class="fas fa-shopping-cart"></i> <Badge className="mx-1" bg="danger">{totalItems}</Badge>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="container cart">
        <Offcanvas.Header closeButton className="cart__titleContainer" >
          <Offcanvas.Title className="cart__title">Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <ListGroup as="ol" numbered className="gap-3">

            {products.map( ({product, counter}) => {
              return (
                <ListGroup.Item
                key={product.colId}
                as="li"
                className="d-flex justify-content-between align-items-start card__shadow"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{product.line} {product.color} {product.type} </div>
                    {Formatter(product.price)} COP
                  </div>
                  <Badge variant="primary" className="mx-3 counter__badge">
                    {counter}
                  </Badge>
                  <Button className="delete-icon" onClick={() => removeItem(product.colId)} >
                    <i class="fas fa-trash" ></i>
                  </Button> 
                </ListGroup.Item>
              )
            })}

          </ListGroup>

          <div className="my-3 cart__footerContainer" >
            <Button className="my-3 btn" onClick={clear}>
              Vaciar Carrito
            </Button>
            <p className="cart__title">Total: <strong>{Formatter(parseInt(totalPrice))} COP</strong></p>
          </div>
        </Offcanvas.Body>

        
      </Offcanvas>

      
    </>
  )
    
}


// btn agregar al carrito debe agregar al carrito el producto con las mod que especifica el usuario (talla y tipo)
//totalItems sumar la cantidad deseada por el usuario 