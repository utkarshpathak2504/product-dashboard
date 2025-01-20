import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allProducts: [],
    favorites: [],
    filteredProducts: [],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload;
        },
        addFavorite(state, action) {
            const product = action.payload;
            if (!state.favorites.find((item) => item.id === product.id)) {
                state.favorites.push(product);
            }
             localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
       
             filterByCategory(state, action) {
            const category = action.payload;
            state.filteredProducts = category === 'all'
                ? state.allProducts
                : state.allProducts.filter((product) => product.category === category);

        },
        sortByPrice(state, action) {
            const direction = action.payload;
            state.filteredProducts.sort((a, b) =>
                direction === 'asc' ? a.price - b.price : b.price - a.price
            );
        },
    },
});

export const { setProducts, addFavorite, removeFavorite, filterByCategory, sortByPrice } =
    productSlice.actions;

export default productSlice.reducer;
