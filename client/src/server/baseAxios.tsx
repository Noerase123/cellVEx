import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: "http://localhost:3001/api",
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}