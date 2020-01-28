import React from 'react';
import "../booklist.css"
import SingleBook from './SingleBook';
import { Button, Row } from "reactstrap"
import PageNavigation from './PageNavigation';
import SingleBookCard from './SingleBookCard';

class BookLibrary extends React.Component {
    state = {  }
    render() { 
        return (
        <div className="book-list"> 
            <h1>I'm the book list for {this.props.genre}</h1>
            <PageNavigation pageNumber={this.props.pageNumber} setPage={this.props.setPage} ></PageNavigation>
            <Row>
                {this.props.books && this.props.books.map((book, i) => <SingleBookCard book={book} key={i}></SingleBookCard>)}
            </Row>
            <PageNavigation pageNumber={this.props.pageNumber} setPage={this.props.setPage} ></PageNavigation>
        </div>);
    }
}
 
export default BookLibrary;