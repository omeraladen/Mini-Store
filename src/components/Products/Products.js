import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import "./products.scss";

function Products() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {data.map(({ id, title, price, description, image }) => (
          <ProductCard
            key={id}
            title={title}
            price={price}
            description={description}
            image={image}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
