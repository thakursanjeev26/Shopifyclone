import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../ProductService";
import "./pd.css";
ProductService;
export default function ProductDetails({ cart, setCart }) {
  const { category, id } = useParams();
  const [api, setApi] = useState({});
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  useEffect(() => {
    ProductService.getById(id).then((res) => {
      setApi(res.data);
    });
  }, [api]);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
              src={api.thumbnail}
              alt="Product"
              className="img-fluid rounded mb-3 product-image"
              id="mainImage"
            />
            <div className="d-flex justify-content-between">
              {api.images &&
                api.images.map((x) => (
                  <img
                    src={x}
                    alt="Thumbnail 1"
                    className="thumbnail rounded active"
                  />
                ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3">{api.title}</h2>
            <p className="text-muted mb-4">SKU: WH1000XM4</p>
            <div className="mb-3">
              <span className="h4 me-2">{api.price}</span>
              <span className="text-muted">
                <s>$399.99</s>
              </span>
            </div>
            <div className="mb-3">
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-fill text-warning" />
              <i className="bi bi-star-half text-warning" />
              <span className="ms-2">4.5 (120 reviews)</span>
            </div>
            <p className="mb-4">{api.description}</p>
            <div className="mb-4">
              <h5>Color:</h5>
              <div
                className="btn-group"
                role="group"
                aria-label="Color selection"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="color"
                  id="black"
                  autoComplete="off"
                  defaultChecked
                />
                <label className="btn btn-outline-dark" htmlFor="black">
                  Black
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="color"
                  id="silver"
                  autoComplete="off"
                />
                <label className="btn btn-outline-secondary" htmlFor="silver">
                  Silver
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="color"
                  id="blue"
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor="blue">
                  Blue
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                defaultValue={1}
                min={1}
                style={{ width: 80 }}
              />
            </div>
            <button className="btn btn-primary btn-lg mb-3 me-2">
              <i
                className="bi bi-cart-plus"
                onClick={() => addToCart({ id: api.id, name: api.title })}
              />{" "}
              Add to Cart
            </button>

            <div className="mt-4">
              <h5>Key Features:</h5>
              <ul>
                <li>Industry-leading noise cancellation</li>
                <li>30-hour battery life</li>
                <li>Touch sensor controls</li>
                <li>Speak-to-chat technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
