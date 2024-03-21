import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Global CSS dosyası

function ProductList({ products }) {
  return (
    <div className="container">
      <div className="row">
        {products &&
          products.map((product) => {
            const title =
              product.title.length > 20
                ? product.title.slice(0, 20) + "..."
                : product.title;
            const description =
              product.description.length > 100
                ? product.description.slice(0, 100) + "..."
                : product.description;

            return (
              <div className="col-lg-3 col-md-6 mb-4" key={product.id}>
                <div className="card h-100">
                  <Link
                    to={`/detail/${product.id}`}
                    className="card-link"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">{title}</h5>
                      <p className="card-text">{description}</p>
                      <p className="card-text text-price">
                        Price: ${product.price}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;
