import React, { useEffect, useState } from "react";
import {Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'

import ItemList from "../ItemList";
import Loading from "../Loading";
//LLamado al api, manejo de estados, traer 1 item list ya mapeado y devuelve como lista
import ProductCollars from "../../Mock/ProductCollars"

export default function ItemListContainer() {
  console.log(useParams());
  // promesa
  // Ponemos un estados porque va a cambiar y actualizar

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {line} = useParams()

  useEffect(() => {

    const itemPromise = new Promise((resolve, reject) => {
      setIsLoading(true)
      setTimeout(() => {
        resolve(ProductCollars)
      }, 2000)

    })

    itemPromise.then((res) => {

      if(!!line){
        setItems(res.filter(x => x.slug === line))
      } else{
        setItems(res)
      }
      
      
    }).finally(() => {
      setIsLoading(false)
    })
  }, [ line]) //useEffect escucha los cambios del array items, y se actualiza a medida que se modifica dicho array.

  if(isLoading){
    return(
      <Row className="loading-container">
        <Loading message={'Cargando Productos'}  />
      </Row>
    )
  }

  return(
    // Enviamos el array de objetos del api al itemList para ser mapeados.
    <Row className=' container d-flex flex-row mx-auto'>
      <h2 className='my-5' >PRODUCTOS</h2>
      <ItemList items={items} />
    </Row>
    
    
  )
}