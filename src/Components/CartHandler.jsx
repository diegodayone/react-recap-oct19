import React from 'react';
import { Badge, Button, Row} from "reactstrap"

class CartHandler extends React.Component {
    state = {  }
    render() {
        let isInCart = undefined;
        if (this.props.cart)
            isInCart = this.props.cart.find( book => book.asin === this.props.asin)

        return ( <>
            <Row style={{ padding: "10px"}}>
                {isInCart ? 
                    <Badge color="success">In the cart {isInCart.copies}</Badge>
                    : 
                    <Badge color="danger">Not in the cart</Badge>
                }
                </Row>
                <Row style={{ padding: "10px"}}>
                    <Button color="success" onClick={()=> this.props.addToCart(this.props.asin)}>Add</Button>
                    {isInCart && <Button color="danger" onClick={()=> this.props.removeFromCart(this.props.asin)}>Remove</Button> }
                </Row>
            </>
         );
    }
}
 
export default CartHandler;