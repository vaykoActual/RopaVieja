import React from "react";
import { Link } from "react-router-dom";
import logo from "../services/logo.png";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="App">
      <header>
        <Link className="logo" to="/">
          <img className="logo" src={logo} alt="RopaVieja" />
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
        <hr />
        {currentUser && (
          <>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <hr />
          </>
        )}
      </header>
      {props.children}
    </div>
  );
}
