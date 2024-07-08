import React, { useState } from "react";
import logo from '../../assets/fb.png'; // Assume this is the correct path
import cartImage from '../../assets/cart.png'; // Assume this is the correct path
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar({ openFilterModal }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    console.log("Filter button clicked, showing modal");
    openFilterModal();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ paddingRight: '100px' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" />
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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

            <form className="d-flex" style={{ marginLeft: '-20px' }}> {/* Adjust marginLeft to move elements left */}
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success me-2" type="submit">
                Search
              </button>
              <button
                type="button"
                className="btn btn-primary ms-2"
                onClick={handleShow}
              >
                Filter
              </button>
            </form>

            <div className="d-flex align-items-center ms-3" style={{ marginLeft: '-20px' }}> {/* Adjust marginLeft to move elements left */}
              <Link to="/newcart.html">
                <img className="cart-image me-2" src={cartImage} alt="Cart" />
              </Link>
              <Link className="nav-link btn btn-outline-purple ms-2 me-2" to="/newcart.html">
                Cart
              </Link>
              <button
                className="nav-link btn btn-outline-purple ms-2"
                onClick={() => console.log("Implement logout logic")}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

