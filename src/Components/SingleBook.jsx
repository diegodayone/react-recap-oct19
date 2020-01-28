import React from 'react';
import { Row, Col, Badge } from "reactstrap"
import CartHandler from './CartHandler';

class SingleBook extends React.Component {
    state = {  }
    render() { 
        const { image, title, category, price} = this.props.book
      
        return ( 
            <Row className="book-row">
                <Col md="2">
                    <img src={image} style={{ maxWidth: "100%" }} alt={title} ></img>
                </Col>
                <Col md="10">
                    <h3>{title}</h3>
                    <h4>{category} | {price} €</h4>
                    <CartHandler cart={this.props.cart} 
                                    asin={this.props.book.asin} 
                                    addToCart={this.props.addToCart}
                                    removeFromCart={this.props.removeFromCart}></CartHandler>
                </Col>
            </Row>
         );
    }
}
 
export default SingleBook;