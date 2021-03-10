import { useState } from "react";

export default function ProductCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    imgURL: "",
  });
  const { name, brand, price } = formData;
  const { handleCreate } = props;

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
        handleCreate(formData);
      }}
    >
      <h3>Create Product</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Brand:
        <input
          type="text"
          brand="brand"
          Value={brand}
          onChange={handleChange}
        />
        <label>
          Price:
          <input
            type="text"
            price="price"
            Value={price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </label>
    </form>
  );
}
