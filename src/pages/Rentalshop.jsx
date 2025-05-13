// File: src/pages/RentalShop.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRentalProducts } from "../api/rentalAPI";

const RentalShop = () => {
  const { category } = useParams();
  const [products, setProducts] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchRentalProducts(category);
      setProducts(data);
    };
    getProducts();
  }, [category]);

  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Rental Items: {category}
      </h1>
      {products ? (
        <pre className="whitespace-pre-wrap text-gray-800 bg-gray-100 p-4 rounded">
          {products}
        </pre>
      ) : (
        <p>Loading AI-generated products...</p>
      )}
    </div>
  );
};

export default RentalShop;
