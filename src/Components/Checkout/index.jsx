import React, {useContext, useState} from "react";
import { useHistory } from "react-router-dom";
import {Form, Button} from "react-bootstrap"
import CartContext from "../../Context/CartContext";
import { createOrder } from "../../Services/OrderService";
import "./index.css"


const INPUTS = [
  {name: 'name', label: 'Nombre', placeholder: 'Nombre completo'},
  {name: 'phone', label: 'Teléfono', placeholder: 'Número de telefono'},
  {name: 'city', label: 'Ciudad', placeholder: 'Ciudad de envio'},
  {name: 'address', label: 'Direccion', placeholder: 'Ingrese Direccion'},
  {name: 'line', label: 'Datos adicionales de direccion', placeholder: 'Datos adicionales de direccion', required: false},
  {name: 'email', label: 'Correo Electronico', placeholder: 'Correo Electronico', type: 'email'},
  {name: 'email2', label: 'Confirmar Correo', placeholder: 'Confirma Correo Electronico'}
];

export default function Checkout(){
  const [formData, setFormData] = useState({})
  const {cart, clear, getTotalProducts, getTotalPrice, calculateShipping} = useContext(CartContext);

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const {email2, ...address} = formData;

    if (formData.email !== email2) {
      alert('Correos invalidos');
      return;
    }

    const totalItems = getTotalProducts();

    const totalPrice = getTotalPrice();

    const shipping = calculateShipping(totalPrice);

    const order = await createOrder({address, ...cart, totalItems, totalPrice, shipping});
    clear();
    form.reset();
    alert(`Gracias por su compra. Su orden de pedido es: ${order.id}`);

    history.push("/");
  }

  const onInputChange = (e) => {
    const input = e.target
    setFormData({...formData, [input.name] : input.value});
  }

  return (
    <div className="container mx-auto my-3 d-flex justify-content-center flex-column ">

      <h2 className='my-3 title'> PROCESO DE PAGO </h2>

      <div className="checkout">
        
        <Form className=" mx-auto my-3 p-3 checkout__form" onSubmit={onSubmit}>
          {INPUTS.map( ({name, label, type = 'text', required=true, placeholder}) => (
            <Form.Group className="mb-3" controlId={label} key={name}>
              <Form.Label>{label}</Form.Label>
              <Form.Control name={name} type={type} placeholder={placeholder} requiered={required.toString()} onChange={onInputChange}/>
            </Form.Group>
          ))}

          <div className="d-flex justify-content-center align-items-center gap-3">
            <Button variant="primary" type="submit">
              Finalizar Compra
            </Button>

            <Button variant="primary" type="reset" >
              Limpiar datos
            </Button>
          </div>
        </Form>   

        <img className="picture" src="https://firebasestorage.googleapis.com/v0/b/mazu-store.appspot.com/o/dogs%2F8.png?alt=media&token=0786f6bb-560d-445c-8fbd-ad34b5a67485" alt="Dibujo de un perrito" />     
      </div>

      

    </div>

  )
}