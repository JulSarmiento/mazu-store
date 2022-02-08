import React, { useState }from "react";
import { Form, Button, InputGroup, FormGroup } from "react-bootstrap";
import { getOrder } from "../../Services/OrderService";
import Slider from "../Slider";
import Formatter from "../../Utilities/MoneyFormater";
import "./index.css";

/**
 * This container is the home page's view
 * 
 * @returns slider's component and the about us section 
 */
export default function HomeContainer(){
  const [order, setOrder] = useState(null);
  const [orderError, setOrderError] = useState(null);
  

  const searchOrder = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const orderId = formData.get('orderId');
    const order = await getOrder(orderId);

    setOrder(order);
    setOrderError(!order ? `Orden "${orderId}" no encontrada` : null);
  };

  return(
   <>
      <Slider/>
      
      <Form onSubmit={searchOrder} className="py-3 search__form">
        
        <FormGroup itemID="orderId" className="search__form__container">
          <Form.Label className="search__label">Buscar Orden</Form.Label>
          <InputGroup>
            <Form.Control name="orderId" placeholder="Numero de orden" className="search__input" isInvalid={orderError} required={true} pattern="\S+" title="Solo debe contener numeros y letras sin espacios ni caracteres especiales"/>
            

            <Button variant="outline-secondary" type="submit">
              Buscar
            </Button>

            <Form.Control.Feedback type="invalid">{orderError}</Form.Control.Feedback>
          </InputGroup>
        </FormGroup>
      </Form>

      {order && 
        <div className="search__result py-3">
          <p className="title"><strong>Resumen de la orden</strong></p>
          <p>Pedido # <strong>{order.id}</strong></p>
          <p>Pedido a nombre de: <strong>{order.address.name}</strong></p>
          
          <div className="my-3 py-3 search__products">
            <p className="title"><strong>Productos</strong></p>

            {order.products.map(({product, counter, uuid, size}) => (
              <div key={uuid} className=" search__products--products m-2 p-2">
           
                <div className=" products__list" >
                  
                  <div className="product__item" >
                    <p>Producto: </p>
                    <p className="ms-2"><strong>{product.slug} {product.line} {product.color}</strong></p>
                  </div>

                  <div className="product__item">
                    <p>Talla:</p>
                    <p className="ms-2"><strong>{size}</strong></p>
                  </div>
                  
                  <div className="product__item">
                    <p>Cantidad:</p>
                    <p className="ms-2"><strong>{counter}</strong></p>
                  </div>
                  
                </div>

              </div>
            ))}
          </div>
          <p>Shipping: <strong>{order.shipping > 0 ? Formatter(order.shipping) : 'Envio gratis'}</strong></p>
          <p>Total: <strong>{Formatter(order.totalPrice)}</strong></p>
        </div>
        
      }

      <div className=" container p-2 gap-3 aboutUs ">
        <img src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/logos%20and%20icons%2Fmazu-logo.svg?alt=media&token=8e1741c0-ac41-459a-b81c-c69dca1bab80" className="aboutUs__picture" alt="Logo completo de mazuzoe store" />
        
        <div className="aboutUs__textContainer">
          <p className="p-3 text">
            Mazuzoe For Fancy Pets, tiene la misión de “divificar” mascotas y ayudar en la tenencia responsable de mascotas promocionando el uso de placas de identificación. Nuestros productos son atractivos para aquellos compañeros peludos apasionados por la vida, el estilo y el ámbito social. 
            <br/>
            <br/>
            Gracias a tus compras, nos encargamos de patrocinar la identificación de mascotas con bajos recursos durante diversas jornadas a lo largo del año. En Mazuzoe estamos comprometidos con la tenencia responsable de toda mascota, con el estilo y con el cotilleo. 
          </p>
        </div>
      </div>

     

      
   </>

  )
}