import React from "react";
import Nav from "react-bootstrap/Nav";

const Menu = () => {
  return (
    <div className="principal-menu">
        <div className="nav">
        <Nav defaultActiveKey="" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="" style={{color: "#1a1a1a"}}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="" style={{color: "#1a1a1a"}}>Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="" style={{color: "#1a1a1a"}}>New Arrivals</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="" style={{color: "#1a1a1a"}}>Products</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="" style={{color: "#1a1a1a"}}>Brand</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="" style={{color: "#1a1a1a"}}>Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="" style={{color: "#1a1a1a"}}>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
        </div>
        <div className="sale-bag">
        <i className="fas fa-shopping-bag fa-2x bag-size"></i>
        <select className="p-items"><option>Cart items:</option> </select>
        <p className="p-total">Total: </p>
        </div>
    </div>
  );
};

export default Menu;
