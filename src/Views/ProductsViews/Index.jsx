import React from "react";
import {Row} from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../Components/ItemListContainer/Index";

export default function ProductsView() {
  const {line} = useParams()
  console.log('line', line)
  return(
    <Row className=' container d-flex flex-row mx-auto'>
      <h2 className='my-5' >PRODUCTOS</h2>
      <ItemListContainer line={line}/>
    </Row>
  )
}
