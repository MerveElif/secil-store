// pages/DetailPage.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Rating } from "@mui/material";

function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product: ", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="detail-container">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          {product ? (
            <div>
              <h2 className="detail-title">{product.title}</h2>
              <div className="detail-content">
                <img
                  src={product.image}
                  alt={product.title}
                  className="detail-image"
                />
                <div className="detail-info">
                  <p className="detail-description">{product.description}</p>
                  <p className="detail-price">$ {product.price}</p>
                  <Rating
                    name="read-only"
                    value={product.rating.rate}
                    readOnly
                  />
                </div>
              </div>
              <Link to="/" className="btn btn-success">
                Back to Home
              </Link>
            </div>
          ) : (
            <p>No product found.</p>
          )}
        </>
      )}
    </div>
  );
}

export default DetailPage;
