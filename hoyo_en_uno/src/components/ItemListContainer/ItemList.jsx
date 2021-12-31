import React from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = (props) => {
   
    return (
        <Row>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </Row >
    )
}
export default ItemList;