// pages/HomePage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { ButtonGroup, Button, Row } from "react-bootstrap";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
        const allCategories = response.data.reduce((acc, curr) => {
          if (!acc.includes(curr.category)) {
            acc.push(curr.category);
          }
          return acc;
        }, []);
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProductsByCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <h2 className="text-products">Products</h2>
      <Row>
        <ButtonGroup className="mb-5">
          <Button
            variant="secondary"
            onClick={() => filterProductsByCategory("All")}
          >
            All
          </Button>
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="secondary"
              onClick={() => filterProductsByCategory(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Row>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default HomePage;
