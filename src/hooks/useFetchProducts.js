import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productSlice';

const useFetchProducts = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        console.log('res', response);
        setData(response?.data);
        setError(null);

        dispatch(setProducts(response?.data)); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dispatch]); 

  return { data, loading, error };
};

export default useFetchProducts;
