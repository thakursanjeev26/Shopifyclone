import React from "react";
import { useEffect, useState } from "react";
import ProductService from "../ProductService";
import { useNavigate } from "react-router-dom";
export default function () {
  // const [api, setApi] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  function open(p) {
    let url = "/productDetails/" + p.category + "/" + p._id;
    navigate(url);
  }
  useEffect(() => {
    ProductService.getAll().then((res) => {
      setProducts(res.data);
    });
  }, [products]);
  return (
    <>
      <div className="container-fluid px-3 py-5 bg-light">
        <h3 className="container-title px-4 fw-bold mb-4">Products</h3>
        <div className="row g-4 px-3">
          {products.map((product) => {
            return (
              <div className="col-md-4" key={product._id}>
                <div className="card h-100 shadow border rounded d-flex flex-column">
                  <img
                    src={product.thumbnail}
                    onClick={() => {
                      open(product);
                    }}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "50%", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text flex-grow-1">
                      {product.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-primary">
                        ${product.price}
                      </span>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        View Product
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
