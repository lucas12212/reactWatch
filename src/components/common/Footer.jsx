import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">About Our Watch Shop</h5> {/* Bootstrap class for bold */}
            <p className="fst-italic"> {/* Bootstrap class for italics */}
              Welcome to our watch shop, where we offer a curated selection of luxury and stylish watches from top brands. Whether you're looking for a classic timepiece or the latest in watch technology, we have something for everyone.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Links</h5> {/* Bootstrap class for bold */}
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark fst-italic">Home</a> {/* Bootstrap class for italics */}
              </li>
              <li>
                <a href="#!" className="text-dark fst-italic">Product</a> {/* Bootstrap class for italics */}
              </li>
              <li>
                <a href="#!" className="text-dark fst-italic">Contact Us</a> {/* Bootstrap class for italics */}
              </li>
              <li>
                <a href="#!" className="text-dark fst-italic">Terms of Service</a> {/* Bootstrap class for italics */}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Contact Us</h5> {/* Bootstrap class for bold */}
            <ul className="list-unstyled mb-0">
              <li>
                <p className="text-dark fst-italic">123 Watch St, Clocksville, USA</p> {/* Bootstrap class for italics */}
              </li>
              <li>
                <p className="text-dark fst-italic">Email: info@watchshop.com</p> {/* Bootstrap class for italics */}
              </li>
              <li>
                <p className="text-dark fst-italic">Phone: (123) 456-7890</p> {/* Bootstrap class for italics */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Watch Shop
      </div>
    </footer>
  );
};

export default Footer;
