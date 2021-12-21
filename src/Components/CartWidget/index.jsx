import React from "react";
import { Button, Badge } from "react-bootstrap";

export default function CartWidget () {

  return(
    <Button>
      <i class="fas fa-shopping-cart"></i> <Badge className="mx-1" bg="danger">0</Badge>
    </Button>
  )
    
}