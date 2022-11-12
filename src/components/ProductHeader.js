import React, { Component } from "react";
import { Navbar, NavbarBrand} from "reactstrap";

class ProductHeader extends Component {
  render() {
    return (
      <div className="text-center" >
<Navbar
    className="my-2"
    color="black"
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

export default ProductHeader;