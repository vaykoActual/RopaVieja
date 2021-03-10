import { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import {
  destroyProduct,
  getAllProducts,
  postProduct,
  putProduct,
} from "../services/products";
import { getAllCategories } from "../services/categories";
import Products from "../screens/Products";
import Categories from "../screens/Categories";
import ProductCreate from "../screens/ProductCreate";
import ProductEdit from "../screens/ProductEdit";
import ProductDetail from "../screens/ProductDetail";

export default function MainContainer(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesList = await getAllCategories();
      setCategories(categoriesList);
    };
    fetchCategories();
  }, []);

  const handleCreate = async (formData) => {
    const newProduct = await postProduct(formData);
    setProducts((prevState) => [...prevState, newProduct]);
    history.push("/products");
  };

  const handleDelete = async (id) => {
    await destroyProduct(id);
    setProducts((prevState) =>
      prevState.filter((product) => product.id !== id)
    );
  };

  const handleUpdate = async (id, formData) => {
    const updatedProduct = await putProduct(id, formData);
    setProducts((prevState) =>
      prevState.map((product) => {
        return product.id === Number(id) ? updatedProduct : product;
      })
    );
    history.push("/Products");
  };

  return (
    <div className="nav-container">
      <Switch>
        {!currentUser && <Redirect to="/" />}
        <Route path="/products/new">
          <ProductCreate handleCreate={handleCreate} />
        </Route>
        <Route path="/products/:id/edit">
          <ProductEdit products={products} handleUpdate={handleUpdate} />
        </Route>
        <Route path="/products/:id">
          <ProductDetail product={products.id} categories={categories} />
        </Route>
        <Route path="/products">
          <Products
            products={products}
            currentUser={currentUser}
            handleDelete={handleDelete}
          />
        </Route>
        <Route path="/categories">
          <Categories categories={categories} />
        </Route>
      </Switch>
    </div>
  );
}
