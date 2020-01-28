import React from 'react';
import { Button } from "reactstrap"

class PageNavigation extends React.Component {
    state = {  }
    render() { 
        return ( <div className="page-navigation">
            {this.props.pageNumber === 1 ?  <Button disabled>&lt;-</Button> :  <Button onClick={() => this.props.setPage(-1)}>&lt;-</Button>}
           
            <span>{this.props.pageNumber}</span>
            <Button onClick={() => this.props.setPage(1)}>-&gt;</Button>
        </div> );
    }
}
 
export default PageNavigation;