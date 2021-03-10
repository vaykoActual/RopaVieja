import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Products.css";

export default function Products(props) {
  const { products, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h3>{product.name}</h3>
            <img src={product.imgURL} alt="NoPicsForThis" />
            <h5>{product.description}</h5>
          </Link>
          {product.user_id === currentUser?.id && (
            <>
              <Link to={`/products/${product.id}/edit`}>
                <button>edit</button>
              </Link>
              <button onClick={() => handleDelete(product.id)}>delete</button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <Link to="/products/new">
        <button>SellSomeClothes</button>
      </Link>
      <Card style={{ width: "18rem" }}>
        <Image src="https://i.imgur.com/rwkCzqZ.jpeg/286x180" fluid />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
