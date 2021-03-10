import { useState } from "react";

export default function ProductCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    imgURL: "",
  });
  const { name, brand, description, price, imgURL } = formData;
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
        <input type="text" name="brand" value={brand} onChange={handleChange} />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </label>
        <textera>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </textera>
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
      </label>
    </form>
  );
}
