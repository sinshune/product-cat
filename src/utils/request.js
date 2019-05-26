import axios from 'axios'
import { getToken } from './auth'

const request = axios.create({
  baseUrl: '',
  timeout: 10000,
  headers: {
    'token': getToken()
  }
})
export default request
