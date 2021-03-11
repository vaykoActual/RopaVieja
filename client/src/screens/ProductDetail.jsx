import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../services/products";
import { addProductToCategory } from "../services/productsCategories";

export default function ProductDetail(props) {
  const [productItem, setProductItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { id } = useParams();
  const { categories } = props;

  useEffect(() => {
    const fetchProductItem = async () => {
      const productData = await getOneProduct(id);
      setProductItem(productData);
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
      <img src={productItem?.imgURL} alt="NoPicsForThis" />
      <h3>{productItem?.name}</h3>
      <h3>{productItem?.brand}</h3>
      <h3>{productItem?.description}</h3>
      <h3>${productItem?.price}</h3>

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
