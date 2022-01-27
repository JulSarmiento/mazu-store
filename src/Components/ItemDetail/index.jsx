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

  const [formData, setFomrData] = useState({
    
  });

  const {addItem} = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  const {slug, line, color, stones, stock, material, price, picture} = product; 

  const onInputChange = (e) => {
    const input = e.target
    setFomrData({...formData, [input.name] : input.value});
  }

  const onAdd = (value) => {
    setCounter(counter + value) 
  };

  const addToCart = (e) => {
    e.preventDefault();
    
    if(counter !== 0 ) {
      addItem(product, counter, formData)
    }
    
  }

  return(
    <div className="card d-flex   justify-content-center align-items-center flew-sm-column flew-md-column flex-lg-row p-3 gap-3 itemDetailContainer">
      <div className="my-auto itemDetail__pictureContainer">
        <img loading="lazy" src={picture} className=" itemDetail__picture" alt="" />
        <div className="itemDetail__pictureBackground"></div>
      </div>
      
      <div  className="gap-5 mx-5 px-3 itemDetail__textContainer">
        <h2 className="text-center"><strong>{line} {color}</strong></h2>
        <h4 className="text-center">{Formatter(price)} COP</h4>
        <p className="my-3">
          Nuestros {slug} <strong>{line} {color}</strong> nace del inteso interes por el glamour, el que diran y el buen gusto.
          <br/>
          <br/>
          Conformado por {stones} de alta calidad y {material}, pertime que tu compañero/a fiel saque a relucir su lado mas divo y a ser el foco de todas las miradas, especialmente, las de tus vecinos.
          <br />
          <br />
           Garantizamos la <strong>"divez" </strong> o devolveremos tu dinero!.
        </p>

        <div>
          
          <form onSubmit={addToCart} className=" d-flex flex-column gap-3" >


            {/* Para collares */}

            { slug === "Collars" ? 
              <div>
                <h3>Tallas:</h3>

                <div className="d-flex flex-row gap-3 px-2 ">

                  <div className=" d-flex align-items-center gap-1 form__item">
                    <label htmlFor="">XS</label>
                    <input type="radio" name="size" value="XS" onChange={onInputChange}required/>
                  </div>

                  <div  className=" d-flex align-items-center gap-1 form__item">
                    <label htmlFor="">S</label>
                    <input type="radio" name="size" value="S" onChange={onInputChange}/>
                  </div>

                  <div className=" d-flex align-items-center gap-1 form__item">
                    <label htmlFor="">M</label>
                    <input type="radio" name="size" value="M" onChange={onInputChange}/>
                  </div>

                  <div className=" d-flex align-items-center gap-1 form__item">
                    <label htmlFor="">L</label>
                    <input type="radio" name="size" value="L" onChange={onInputChange}/>
                  </div>

                  <div className=" d-flex align-items-center gap-1 form__item">
                    <label htmlFor="">XL</label>
                    <input type="radio" name="size" value="XL" onChange={onInputChange}/>
                  </div>

                </div>

                <div className="my-3">
                    
                  <h3>Tipo:</h3>
                  {/* Para Collares */}

                  <div className="d-flex gap-3">

                    <div className=" d-flex align-items-center gap-1 ">
                      <label htmlFor="">6 mm</label>
                      <input type="radio" name="type" value="6mm" onChange={onInputChange} required/>
                    </div>

                    <div  className=" d-flex align-items-center gap-1 ">
                      <label htmlFor="">8 mm</label>
                      <input type="radio" name="type" value="8 mm" onChange={onInputChange}/>
                    </div>

                    <div className=" d-flex align-items-center gap-1 ">
                      <label htmlFor="">10 mm</label>
                      <input type="radio" name="type" value="10mm" onChange={onInputChange}/>
                    </div>

                  </div>

                </div>

              </div>

            :

              <div>
              <h3>Complemento:</h3>
              {/* Para Placas */}
              <div className=" d-flex gap-3">
                
                <div className=" d-flex align-items-center gap-1 ">
                  <label htmlFor="">Estrella</label>
                  <input type="radio" name="complement" value="star" onChange={onInputChange} required/>
                </div>

                <div  className=" d-flex align-items-center gap-1 ">
                  <label htmlFor="">Corazon</label>
                  <input type="radio" name="complement" value="heart" onChange={onInputChange}/>
                </div>

                <div className=" d-flex align-items-center gap-1 ">
                  <label htmlFor="">Nada</label>
                  <input type="radio" name="complement" value="none" onChange={onInputChange}/>
                </div>

              </div>
            </div>
            
            }           
            

            <div >
              <h3>Cantidad: </h3>
              <div>
                <p className="mx-1">Disponibles: {stock}</p>
                <div className="counter">
                  <ItemCount stock={stock} initial={counter} onAdd={onAdd}/>
                </div>
                
              </div>
            </div>   

            <div className="mx-auto ">
              <Button type="submit">Agregar al carrito</Button>
            </div>          
          </form>

        </div>

      </div>

    </div>
  )
}