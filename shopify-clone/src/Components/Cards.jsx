import React from "react";

export default function Cards() {
  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="featured-product-card card shadow border rounded overflow-hidden">
              <div className="featured-product-image card-img-top" />
              <img
                style={{ height: "350px", overflow: "hidden" }}
                src=""
                className="img-thumbnail card-img-top border-0 rounded-0"
                alt="Featured Product"
              />
              <div className="featured-product-details card-body">
                <h3 className="card-title mb-3">Featured Product Title</h3>
                <p className="card-text mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted fw-bold">Price: $49.99</span>
                  <a href="#" className="btn btn-primary">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
