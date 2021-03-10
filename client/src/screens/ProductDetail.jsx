// import React from "react";
// // import './.css';
// import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";

// export default function ShowProducts(props) {
//   return (
//     <>
//       <div className="product-container">
//         {props.products.map((rec) => (
//           <Link to={`/products/${rec.id}`}>
//             <Card
//               style={{
//                 backgroundColor: "transparent",
//                 border: "2px solid rgb(40, 95, 114)",
//               }}
//               className="product-card justify-content-center align-items-center mx-4"
//             >
//               <div className="mx-5">
//                 <Card.Title
//                   className="product-title-home"
//                   style={{ fontSize: "30px" }}
//                 >
//                   {rec.product_name}
//                 </Card.Title>
//               </div>
//               <Card.Body>
//                 <Card.Img
//                   className="product-card-photo"
//                   variant="top"
//                   src={rec.upload_photo}
//                   alt="product-photo"
//                 />
//               </Card.Body>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../services/products";
import { addProductToCategory } from "../services/productsCategories";

export default function ProductDetail(props) {
  const [productItem, setProductItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchProductItem = async () => {
      const productData = await getOneProduct(id);
      console.log(productData);
      setProductItem(productData);
      console.log(productData);
    };

    fetchProductItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = await addProductToCategory(selectedCategory, id);
    setProductItem(productData);
  };

  return (
    <div>
      <h2>Details</h2>
      <h3>{productItem?.name}</h3>
      <h3>{productItem?.brand}</h3>
      <h3>{productItem?.description}</h3>
      <h3>{productItem?.price}</h3>

      <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          <option value="default" disabled>
            -- Select a category --
          </option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button>add</button>
      </form>
    </div>
  );
}
