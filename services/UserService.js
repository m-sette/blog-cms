import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8081/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getUser() {
    return apiClient.get('/user')
  }
}
