import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}
})

export default axiosApi;