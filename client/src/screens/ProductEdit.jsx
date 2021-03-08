import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;
  const { products, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const productItem = products.find((product) => product.id === Number(id));
      setFormData({
        name: productItem.name,
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
      <br />
      <button>Submit</button>
    </form>
  );
}
