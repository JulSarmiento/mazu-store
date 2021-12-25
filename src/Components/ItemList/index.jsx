import React from "react";
import Item from "../Item";

/**
 * This component map the items array.
 * 
 * @param {objetc's array}
 *   
 * @returns maped objects
 */
export default function ItemList({items}){
  return items.map((item) => <Item key={item.colId} item={item} />)

}