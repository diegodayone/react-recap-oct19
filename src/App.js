import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList';
import {Button } from "reactstrap"
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import NavBooks from './Components/Nav';
import BookLibrary from './Components/BookLibrary';


class App extends React.Component {
  state = {
    category: "Fantasy",
    books: [],
    currentPage: 0,
    pageSize: 10,
    cart: undefined
  }

  setCurrentPage = async (pageOffset) => {
    if (this.state.currentPage + pageOffset >= 0){
      this.setState({currentPage: this.state.currentPage + pageOffset})
      this.loadBooks(this.state.category, this.state.currentPage + pageOffset )
    }
    else{
      console.log("cannot go before page 0")
    }
 
  }

  setGenre = async (param) => {
    const selectedGenre = param.currentTarget.value;
    this.setState({ category: selectedGenre, currentPage: 0})
    await this.loadBooks(selectedGenre)
  }

  loadBooks = async (genre, currentPage = 0) => {
    const offset= currentPage * this.state.pageSize
    const result = await fetch(`http://localhost:5400/books?category=${genre.toLowerCase()}&limit=${this.state.pageSize}&offset=${offset}`)
    const books = await result.json()
    this.setState({ books: books})
  }

  addToCart = async (asin) =>{
  
    const addToCartResult = await fetch(`http://localhost:5400/cart/2/${asin}`, {
      method: "POST"
    })

    const json = await addToCartResult.json();
    this.setState({ cart: json})
    // if (addToCartResult.ok){
    //   const cart = this.state.cart
    //   const previouslyThere = cart.find(book => book.asin === asin); //search in the cart for the current book
    //   if (previouslyThere){ //if it's there, i just add a new copy to the number of copies
    //     previouslyThere.copies++;
    //   }
    //   else{
    //     const book = this.state.books.find(b => b.asin === asin) //i search in my books collection for the book metadata
    //     book.copies = 1; //I set the copies to 1
    //     cart.push(book) //I push the book into the cart
    //   }
    //   this.setState({ cart: cart})
    // }
  }

  removeFromCart = async (asin) => {
    console.log("HEY we are on App.js", asin)
    const deleteResult = await fetch(`http://localhost:5400/cart/2/${asin}`, {
      method: "DELETE"
    })

    const json = await deleteResult.json();
    this.setState({ cart: json})

  //   if (deleteResult.ok){
  //     const cart = this.state.cart
  //     const previouslyThere = cart.find(book => book.asin === asin); //search in the cart for the current book
  //     if (previouslyThere.copies > 1){ //if it's there, i just add a new copy to the number of copies
  //       previouslyThere.copies--;
  //       this.setState({ cart: cart})
  //     }
  //     else{
  //       this.setState({ cart: cart.filter(x => x.asin !== asin)})
  //     }
  // }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBooks cart={this.state.cart}></NavBooks>
          <h1>Welcome to Strive BookStore</h1>
          <div className="menu">
            <Button value="Fantasy" onClick={this.setGenre}>Fantasy</Button>
            <Button value="Scifi" onClick={this.setGenre}>Scifi</Button>
            <Button value="Horror" onClick={this.setGenre}>Horror</Button>
            <Button value="Romance" onClick={this.setGenre}>Romance</Button>
            <Button value="History" onClick={this.setGenre}>History</Button>
          </div>
          <Switch>
            <Route path="/" exact>
              <BookList pageNumber={this.state.currentPage +1} 
                        genre={this.state.category} 
                        books={this.state.books} 
                        setPage={this.setCurrentPage}
                        cart={this.state.cart}
                        addToCart={this.addToCart}
                        removeFromCart={this.removeFromCart} />
            </Route>
            <Route path="/library" >
              <BookLibrary pageNumber={this.state.currentPage +1} genre={this.state.category} books={this.state.books} setPage={this.setCurrentPage} />
            </Route>
            <Route path="/details/:asin">
              <h1>Hey, I'll be your book details!</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  componentDidMount = async () => {
    // fetch info from the web
    // read the file system
    // time taking operation

    await this.loadBooks(this.state.category)
    const cartResponse = await fetch("http://localhost:5400/cart/2")
    const cartJson = await cartResponse.json();
    this.setState({
      cart: cartJson
    })

    // const result = await fetch("http://localhost:5400/books")
    // const books = await result.json()
    // console.log(books)
  }
}

export default App;
