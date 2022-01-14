import React, {useState, useContext} from "react";
import "./index.css"; 
import { Button } from "react-bootstrap";
import ItemCount from "../ItemCount";
import CartContext from "../../Context/CartContext";
import Formatter from "../../Utilities/MoneyFormater";


/**
 * This coimponent return the item detail's card component
 * 
 * @param {object} 
 * @returns the item detail's card with object's information.
 */
export default function ItemDetail({product}){

  const {addItem} = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  const {slug, line, color, stones, stock, material, price, picture} = product; 

  const onAdd = (value) => {
    setCounter(counter + value) 
  };

  const addToCart = () => {
    addItem(product, counter)
  }

  return(
    <div className="card d-flex flex-row p-5 m-3 itemDetailContainer">
      <div className="my-auto itemDetail__pictureContainer">
        <img loading="lazy" src={picture} className=" itemDetail__picture" alt="" />
        <div className="itemDetail__pictureBackground"></div>
      </div>
      
      <div  className="gap-5 mx-5 px-3">
        <h2 className="text-center"><strong>{line} {color}</strong></h2>
        <h4 className="text-center">{Formatter(price)} COP</h4>
        <p className="my-3">
          Nuestros {slug} <strong>{line} {color}</strong> nace del inteso interes por el glamour, el que diran y el buen gusto.
          <br/>
          <br/>
          Conformado por {stones} de alta calidad y {material}, pertime que tu compañero/a fiel saque a relucir su lado mas divo y a ser el foco de todas las miradas, especialmente, las de tus vecinos.
          <br />
          <br />
           Garantizamos la "divez" o devolveremos tu dinero!.
        </p>

        <div>
          
          <form action="" className="container d-flex flex-column gap-3" >

            <h3>Tallas:</h3>

            <div className="container d-flex gap-3">
              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="">XS</label>
                <input type="radio" name="zise" value="XS"/>
              </div>

              <div  className=" d-flex align-items-center gap-2">
                <label htmlFor="">S</label>
                <input type="radio" name="zise" value="XS"/>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="">M</label>
                <input type="radio" name="zise" value="XS"/>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="">L</label>
                <input type="radio" name="zise" value="XS"/>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="">XL</label>
                <input type="radio" name="zise" value="XS"/>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="">XXL</label>
                <input type="radio" name="zise" value="XS"/>
              </div>

            </div>

            <h3>Tipo:</h3>
            
            <div className="container d-flex gap-3">
              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="">6 mm</label>
                <input type="radio" name="type" value="6mm"/>
              </div>

              <div  className=" d-flex align-items-center gap-2">
                <label htmlFor="">8 mm</label>
                <input type="radio" name="type" value="8 mm"/>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <label htmlFor="">10 mm</label>
                <input type="radio" name="type" value="10mm"/>
              </div>

            </div>

            <div >
              <h3>Cantidad</h3>
              <div>
                <p className="mx-1">Disponibles: {stock}</p>
                <ItemCount stock={stock} initial={counter} onAdd={onAdd}/>
              </div>
            </div>   

            <div className="mx-auto">
              <Button onClick={addToCart}>Agregar al carrito</Button>
            </div>          
          </form>

        </div>

      </div>

     
    </div>
  )
}