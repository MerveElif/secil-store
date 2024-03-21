// ProductCard.js
import React from "react";
import "../App.css"; // Global CSS dosyası

function ProductCard({ product }) {
  // Başlık uzunluğunu kontrol et ve gerekirse kısalt
  const title =
    product.title.length > 20
      ? product.title.slice(0, 20) + "..."
      : product.title;

  // Açıklama kısmını 100 karakterden fazla ise üç nokta ekleyelim
  const description =
    product.description.length > 100
      ? product.description.slice(0, 100) + "..."
      : product.description;

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <p className="card-text mt-auto">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
