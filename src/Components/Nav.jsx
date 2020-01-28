import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from "react-router-dom"

const NavBooks = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-text" to="/">Strive BookStore</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="navbar-text" to="/library/">Library</Link>
            </NavItem>
          </Nav>
          <NavbarText>Cart: {props.cart ? props.cart.length : 0 }</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBooks;