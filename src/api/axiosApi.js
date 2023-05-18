import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://green-star.onrender.com',
    timeout: 5000,
    headers: {Authorization: `Bearer ${localStorage.getItem('access-token')}`}
})

export default axiosApi;