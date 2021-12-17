import React from 'react';

import { Button, Col } from "react-bootstrap";

export default function ItemCount({stock, initial, onAdd}) {

  const setOnAdd = () => {
    onAdd(1)
  }

  const setOnRest = () => {
    onAdd(-1)
  }

   return (

    <Col className='d-flex justify-content-center'>
      <Button disabled={initial === stock} onClick={setOnAdd} className='mx-3'><i class="fas fa-plus"></i></Button>
      <p className='my-auto'>{initial}</p>
      <Button disabled={initial === 0} onClick={setOnRest} className='mx-3'><i class="fas fa-minus"></i></Button>
    </Col>

  );
}