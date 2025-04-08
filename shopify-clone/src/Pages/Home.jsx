import React from "react";
import banner from "../Images/banner.webp";
import banner1 from "../Images/b.webp";
import Feature from "../Components/Feature";

export default function Home() {
  return (
    <>
      <div className="container-fluid col-xxl-8 px-4 py-5 bg-primary text-white">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-sm-8 col-lg-6 text-center">
            <img src={banner} alt="logo" className="img-fluid" />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h3 className="display-6 fw-bold mb-3">Starting At $999</h3>
            <h1 className="display-5 fw-bold mb-3">
              The best notebook collection 2024
            </h1>
            <p className="lead fw-bold">Exclusive offer -10% off this week</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start justify-content-center">
              <button type="button" className="btn btn-dark btn-lg px-4">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-3">
          {/* Free Delivery */}
          <div className="col-md-3">
            <div className="bg-light p-4 rounded d-flex align-items-center">
              <div className="me-3 fs-3">
                <i className="bi bi-truck icon-bold"></i>
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Free Delivery</h6>
                <p className="mb-0 small text-muted">Orders from all items</p>
              </div>
            </div>
          </div>

          {/* Return & Refund */}
          <div className="col-md-3">
            <div className="bg-light p-4 rounded d-flex align-items-center">
              <div className="me-3 fs-3">
                <i className="bi bi-currency-dollar icon-bold"></i>
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Return & Refund</h6>
                <p className="mb-0 small text-muted">Money back guarantee</p>
              </div>
            </div>
          </div>

          {/* Member Discount */}
          <div className="col-md-3">
            <div className="bg-light p-4 rounded d-flex align-items-center">
              <div className="me-3 fs-3">
                <i className="bi bi-percent icon-bold"></i>
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Member Discount</h6>
                <p className="mb-0 small text-muted">On order over $99</p>
              </div>
            </div>
          </div>

          {/* Support 24/7 */}
          <div className="col-md-3">
            <div className="bg-light p-4 rounded d-flex align-items-center">
              <div className="me-3 fs-3">
                <i className="bi bi-headset icon-bold"></i>
              </div>
              <div>
                <h6 className="mb-1 fw-bold">Support 24/7</h6>
                <p className="mb-0 small text-muted">
                  Contact us 24 hours a day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feature />

      <div className="container-fluid py-4">
        <div
          className="row px-4 align-items-center"
          style={{ minHeight: "400px" }}
        >
          <div className="col-md-6 text-center">
            <img
              src={banner1}
              className="img-fluid rounded"
              alt="Promo Banner"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h2 className="fw-bold text-center">Limited Time Offer</h2>
            <p className="text-center">
              Get 20% off on selected products this month!
            </p>
            <button className="btn btn-primary btn-lg mt-2">Shop Now</button>
          </div>
        </div>
      </div>
      <Feature />
    </>
  );
}
