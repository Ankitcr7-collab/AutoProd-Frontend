import React, { Component } from "react";
import { Navbar, NavbarBrand} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div className="text-center" >
<Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
    </NavbarBrand>
  </Navbar>
      </div>
    );
  }
}

export default Header;