import React from "react";
import { NavLink, Link } from "react-router-dom";
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
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <hr />
          </>
        )}
      </header>
      {props.children}
    </div>
  );
}
