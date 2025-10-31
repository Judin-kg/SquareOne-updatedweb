// src/components/MoreDetails.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MoreDetails.css";

const MoreDetails = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch all products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="more-details-container">
      <h1 className="page-title">Product List</h1>

      {products.length === 0 ? (
        <p className="no-products">No products found.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}

      <button
        className="add-product-btn"
        onClick={() => navigate("/login")}
      >
        + Add Product
      </button>
    </div>
  );
};

export default MoreDetails;
