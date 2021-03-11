import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    imgURL: "",
  });
  const { name, brand, description, price, imgURL } = formData;
  const { products, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const productItem = products.find((product) => product.id === Number(id));
      setFormData({
        name: productItem.name,
        brand: productItem.brand,
        description: productItem.description,
        price: productItem.price,
        imgURL: productItem.imgURL,
      });
    };
    if (products.length) {
      prefillFormData();
    }
  }, [products, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Product</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Brand:
        <input type="text" name="brand" value={brand} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={price}
          onChange={handleChange}
        />
      </label>
      <label>
        imgURL:
        <input
          type="text"
          name="imgURL"
          value={imgURL}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
