import React from "react";

import { Button, Col } from "react-bootstrap";


/**
 * this component manage the counting logic.
 */
function ItemCount({stock, initial, onAdd}) {

  const setOnAdd = () => {
    stock--
    onAdd(1)
  }

  const setOnRest = () => {
    stock++
    onAdd(-1)
  }

   return (

    <Col className='d-flex justify-content-center'>
      <Button disabled={initial === 0} onClick={setOnRest} className='mx-3'><i className="fas fa-minus"></i></Button>
      <p className='my-auto'>{initial}</p>
      <Button disabled={initial === stock} onClick={setOnAdd} className='mx-3'><i className="fas fa-plus"></i></Button>
    </Col>

  );
}

ItemCount.defaultProps = {
  stock: 0,
  onAdd: () => {},
  initial: 1
}

export default ItemCount