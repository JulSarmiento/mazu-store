import React from "react";
// Mapear Cards
import Item from "../Item";

export default function ItemList({items}){
  return items.map((item) => <Item key={item.colId} item={item} />)

}