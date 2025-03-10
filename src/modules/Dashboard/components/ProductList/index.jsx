import React from 'react';
import ProductCard from '../ProductCard';
import './index.css'

const ProductList = ({products}) => {
   


  return (
    <div className="productList">
          {products?.map(product => (
         <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
