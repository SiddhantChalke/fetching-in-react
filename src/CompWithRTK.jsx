import React from 'react';
import { useGetProductQuery } from './ApiSlice'; // Adjust the import path as needed

const CompWithRTK = ({ productId }) => {
  const { data: product, error, isLoading } = useGetProductQuery(productId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Product with RTK Query</h1>
      {product && (
        <div>
          <h2 >{product.title}</h2>
          <img src={product.image} alt={product.name} style={{ width: '10%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default CompWithRTK;
