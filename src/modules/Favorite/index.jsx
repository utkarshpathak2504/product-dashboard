import React from 'react'
import ProductList from '../Dashboard/components/ProductList'
import { loadFavoritesFromLocalStorage } from '../../utils';
import './index.css'
import Navbar from '../../components/Navbar';

const Favorite = () => {
    const favorites =  loadFavoritesFromLocalStorage()
   
  return (
      <div>
           <h1 className="favoritesHeader">Favorites</h1>
            <Navbar />
           {favorites?.length === 0 ? (
              <p className='fallbackContainer'>No favorites found.</p> 
          ) : (
              <ProductList products={favorites} />
          )}
    </div>
  )
}

export default Favorite