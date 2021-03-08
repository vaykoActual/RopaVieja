import React from "react";
import { Link } from "react-router-dom";

export default function Products(props) {
  const { products, handleDelete, currentUser } = props;

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <Link to={`/products/${product.id}`}>
            <p>{product.name}</p>
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
        <button>Create</button>
      </Link>
    </div>
  );
}
