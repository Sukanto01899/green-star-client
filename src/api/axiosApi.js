import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000,
    headers: {Authorization: `Bearer ${localStorage.getItem('access-token')}`}
})

export default axiosApi;