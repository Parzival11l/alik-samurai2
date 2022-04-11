import axios from 'axios'

const headers = {}
const baseURL = 'https://swapi.dev/api/'


const axiosClient = axios.create({
  headers,
  baseURL
})

export {
  axiosClient,
  headers,
  baseURL,
}

