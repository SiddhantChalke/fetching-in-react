import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompWithAxios = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/1'); // Adjust the URL
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Product with Axios</h1>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.name} style={{ width: '10%', height: 'auto' }} />
        </div>
      )}
      <hr />
    </div>
  );
};

export default CompWithAxios;
