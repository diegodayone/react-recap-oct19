import React from 'react';
import "../booklist.css"
import SingleBook from './SingleBook';
import { Button } from "reactstrap"
import PageNavigation from './PageNavigation';

class BookList extends React.Component {
    state = {  }
    render() { 
        return (
        <div className="book-list"> 
            <h1>I'm the book list for {this.props.genre}</h1>
            <PageNavigation pageNumber={this.props.pageNumber} setPage={this.props.setPage} ></PageNavigation>
            {this.props.books && this.props.books.map((book, i) => 
                            <SingleBook 
                                book={book} 
                                key={i}
                                cart={this.props.cart}
                                addToCart={this.props.addToCart}
                                removeFromCart={this.props.removeFromCart}
                            />)}
            <PageNavigation pageNumber={this.props.pageNumber} setPage={this.props.setPage} ></PageNavigation>
        </div>);
    }
}
 
export default BookList;