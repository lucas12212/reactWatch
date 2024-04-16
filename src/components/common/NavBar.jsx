import React from "react";
import logo from '../../assets/fb.png'; // Assume this is the correct path
import cartImage from '../../assets/cart.png'; // Assume this is the correct path
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="" />
            </Link>

            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/product">
                    Product
                </Link>
                </li>
            </ul>

            <form className="d-flex w-100 me-5 ms-5" action="" method="get">
                <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search for everything and anything"
                aria-label="Search"
                name="search"
                />
                <button
                className="btn btn-outline-primary"
                style={{ marginRight: "7px" }}
                type="submit"
                >
                Search
                </button>
                {/* Filter Button */}
                <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#filterModal"
                >
                Filter
                </button>
            </form>

            <div className="d-flex">
                <div className="cart-icon">
                <Link to="newcart.html">
                    <img className="cart-image" src={cartImage} alt="Shopping Cart" />
                    <span id="cart-count"></span>
                </Link>
                </div>
                <Link
                className="nav-link btn btn-outline-purple mx-2"
                to="newcart.html"
                >
                Cart
                </Link>
                <button
                id="logoutBtn"
                className="nav-link btn btn-outline-purple mx-2"
                onClick={() => console.log("Implement logout logic")}
                >
                Logout
                </button>
            </div>
            </div>
        </div>
        </nav>

    );
  }


