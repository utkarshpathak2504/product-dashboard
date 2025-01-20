import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../../../store/productSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
    const favorites = useSelector((state) => state.products.favorites); 
    
    console.log("favorites",{favorites})

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div className="productCard">
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>

      <button 
        className={`favoriteButton ${isFavorite ? 'favorited' : ''}`}
        onClick={handleAddFavorite}
        disabled={isFavorite} 
      >
        {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default ProductCard;
