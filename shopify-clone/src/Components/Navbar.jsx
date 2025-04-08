import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartLength }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm py-3 sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-3">
          Shopify
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
          <div className="d-flex mx-auto" style={{ maxWidth: "100%" }}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a product..."
                aria-label="Search"
              />
              <button className="btn btn-primary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-3">
              <li className="nav-item mx-2">
                <Link to="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>

            <a
              className="btn btn-link text-dark text-decoration-none d-flex align-items-center me-3"
              href="#"
            >
              <i className="bi bi-person fs-5 me-1"></i>
              Login
            </a>

            <a
              className="btn btn-link text-dark text-decoration-none position-relative me-3"
              href="#"
            >
              <i className="bi bi-cart fs-5"></i>

              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartLength}
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
