import axios from 'axios'

const apiRequest = axios.create({
  // baseURL: import.meta.env.VITE_BACKEND_URL,
  baseURL: `https://royal-estate-backend.onrender.com/api`,
  withCredentials: true,
})

export default apiRequest
