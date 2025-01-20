
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import ProductList from './components/ProductList';
import { filterByCategory, sortByPrice } from '../../store/productSlice';
import useFetchProducts from '../../hooks/useFetchProducts';
import { categoriesArr } from '../../constsants';
import Navbar from '../../components/Navbar';
import SelectDropdown from '../../components/SelectDropdown';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { data ,loading} = useFetchProducts("https://fakestoreapi.com/products");
    console.log("data", data);




    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('asc');

    const filteredProducts = useSelector((state) => state.products.filteredProducts);


    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        dispatch(filterByCategory(category));

    };

    const handleSortChange = (event) => {
        const order = event.target.value;
        setSortOrder(order);
        dispatch(sortByPrice(order)); 
    };

    return (
        <div className="dashboardContainer">
            
            <h1 className="dashboardHeader">Product Dashboard</h1>
            <Navbar />
            <div className="filtersContainer">
                <SelectDropdown
                    className="categorySelect"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    options={categoriesArr}
                />

                <SelectDropdown
                    className="sortSelect"
                    value={sortOrder}
                    onChange={handleSortChange}
                    options={[
                        { value: 'asc', label: 'Sort by Price: Low to High' },
                        { value: 'desc', label: 'Sort by Price: High to Low' },
                    ]}
                />
            </div>

            { loading ?  <p> loading</p>:<ProductList products={filteredProducts} />}
        </div>
    );
};

export default Dashboard;
