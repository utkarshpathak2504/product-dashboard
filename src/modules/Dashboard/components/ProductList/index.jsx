import React from 'react';
// import ProductCard from './ProductCard';
import ProductCard from '../ProductCard';
import './index.css'

const ProductList = ({products}) => {
   

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

  return (
    <div className="productList">
          {products?.map(product => (
         <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
