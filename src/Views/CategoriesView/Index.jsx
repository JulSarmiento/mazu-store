import React from "react"
import {Row} from "react-bootstrap"

import CategoriesContainer from "../../Components/CategoriesContainer/Index"

export default function CategoriesView(){

  return(
    <Row className='container d-flex flex-row mx-auto my-5 '>
      <h2 className='my-5' >CATEGORIAS</h2>
      <CategoriesContainer/>
    </Row>
  )
}
