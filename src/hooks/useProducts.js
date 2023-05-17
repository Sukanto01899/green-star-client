import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const useProducts = () => {
    const [products, setProducts] = useState(null);

    useEffect(()=>{
        axios.get('https://green-star.onrender.com/products')
        .then(res => setProducts(res.data))
        .catch(err => toast.error(err.message))
    }, [])
    return [products]
};

export default useProducts;