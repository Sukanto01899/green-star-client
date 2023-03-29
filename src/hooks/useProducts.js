import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axiosApi from '../api/axiosApi';

const useProducts = () => {
    const [products, setProducts] = useState(null);

    useEffect(()=>{
        axiosApi.get('/products')
        .then(res => setProducts(res.data))
        .catch(err => toast.error(err.message))

    }, [])
    return [products]
};

export default useProducts;