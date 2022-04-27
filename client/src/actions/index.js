import axios from 'axios'
import { ITEM } from './types'

const ROOT_URL = 'https://trend-vis-production.herokuapp.com/'
// const ROOT_URL = 'http://192.168.0.103/'
// const ROOT_URL = 'http://0.0.0.0'

export const request = () => {
  const request = axios.get(`${ROOT_URL}`)

  return {
    type: ITEM.GET,
    payload: request,
  }
}
