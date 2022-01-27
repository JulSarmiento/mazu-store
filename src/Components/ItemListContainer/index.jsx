import React from "react";
import {Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import useCollection from "../../Hooks/DocumentsHook"
import ItemList from "../ItemList";
import Loading from "../Loading";


/**
 * This component manage the logic and the call for the api mock. 
 * @returns the object's array
 */
export default function ItemListContainer() {
  console.log(useParams());

  const {items, isLoading} = useCollection("Products");
  const {line} = useParams();  

  if(isLoading){
    return(
      <Row className="loading-container">
        <Loading message={'Cargando Productos'}  />
      </Row>
    )
  }

  if(items.length === 0){
    return (
      <Row className="container ">
        <p className="text-center">No existen productos para la categoria {items.line}</p>
      </Row>
    )
  }
  
  const lines = !!line ? items.filter(x => x.slug === line) : items
  
  return(
    // Enviamos el array de objetos del api al itemList para ser mapeados.
    <Row className=' container d-flex flex-row mx-auto'>
      <h2 className='my-5' >PRODUCTOS</h2>
      <ItemList items={lines} />
    </Row>
    
    
  )
}