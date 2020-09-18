import React, { useState } from "react";
import img7 from "../imgs/7.jpg";
import img8 from "../imgs/8.jpg";
import img9 from "../imgs/9.jpg";
import img10 from "../imgs/10.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import products from "../Products.json";
import axios from "axios";

const BestSellingsFlowers = () => {
  return (
    <div className="principal-bestSellingsFlowers">
      <h1 className="h1-best">BEST SELLINGS FLOWERS & GIFTS</h1>
      <div className="gallery-best">
        <Card style={{ width: "18rem", marginLeft: '1em'}}>
          <Card.Img variant="top" src={img7} style={{ height: "17rem" }} />
          <Card.Body style={{ height: "10rem" }}>
            <Card.Title style={{ display: "inline-flex" }}>
              Same day Delivery <p>$250</p>
            </Card.Title>
            <Card.Text style={{ display: "inline-flex" }}>
              Wedding Flower <p>$450</p>
              <br />
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginLeft: '1em'}}>
          <Card.Img variant="top" src={img8} style={{ height: "17rem" }} />
          <Card.Body style={{ height: "10rem" }}>
            <Card.Title style={{ display: "inline-flex" }}>
              Same day Delivery <p>$250</p>
            </Card.Title>
            <Card.Text style={{ display: "inline-flex" }}>
              Wedding Flower <p>$450</p>
              <br />
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginLeft: '1em' }}>
          <Card.Img variant="top" src={img9} style={{ height: "17rem" }} />
          <Card.Body style={{ height: "10rem" }}>
            <Card.Title style={{ display: "inline-flex" }}>
              Same day Delivery <p>$250</p>
            </Card.Title>
            <Card.Text style={{ display: "inline-flex" }}>
              Wedding Flower <p>$450</p>
              <br />
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginLeft: '1em' }}>
          <Card.Img variant="top" src={img10} style={{ height: "17rem" }} />
          <Card.Body style={{ height: "10rem" }}>
            <Card.Title style={{ display: "inline-flex" }}>
              Same day Delivery <p>%250</p>
            </Card.Title>
            <Card.Text style={{ display: "inline-flex" }}>
              Wedding Flower <p>$450</p>
              <br />
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default BestSellingsFlowers;
