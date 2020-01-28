import React from 'react';
import { Row, Col } from "reactstrap"

class SingleBookCard extends React.Component {
    state = {  }
    render() { 
        const { image, title, category, price} = this.props.book

        return ( 
            
            <Col md="4">
                <img src={image} style={{ maxWidth: "100%" }} alt={title} ></img>
                <h3>{title}</h3>
                <h4>{category} | {price} €</h4>
            </Col>
         );
    }
}
 
export default SingleBookCard;