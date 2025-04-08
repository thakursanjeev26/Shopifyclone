import React from "react";

export default function Feature() {
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 3,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot-up, shutdown, application load and response. Boosts burst write performance.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 4,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: { rate: 4.5, count: 146 },
    },
    {
      id: 5,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
  ];

  return (
    <div className="container-fluid mt-3 px-3 py-5 bg-light">
      <h3 className="container-title px-4 fw-bold mb-4">Trending Products</h3>
      <div className="row g-4 px-3">
        {data.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow border rounded d-flex flex-column">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold text-primary">${product.price}</span>
                  <a href="#" className="btn btn-sm btn-outline-primary">
                    View Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
