import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons"


class Header extends React.Component {
  render() {

    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link" style={{ color: "white" }}>  Home  </Link></NavItem>
        {this.props.isAuthenticated && <NavItem><Link to="/profile" className="nav-link" style={{ color: "white" }}>  Profile  </Link></NavItem>
        }
        <NavItem><Link to="/about" className="nav-link" style={{ color: "white" }}>  About  </Link></NavItem>
        <br />
        <AuthButtons className={'Auth'} />
      </Navbar>
    )
  }
}

export default Header;
