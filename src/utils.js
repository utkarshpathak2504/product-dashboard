export const loadFavoritesFromLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
};
