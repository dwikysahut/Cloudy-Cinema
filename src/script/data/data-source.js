/* eslint-disable prefer-promise-reject-errors */
import { API_KEY } from '../utils/const-var'
import axios from 'axios'
class DataSource {
  static movieList (genre = '') {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=${genre}`)
      .then(response => {
        const responseData = response.data
        if (responseData.results) {
          return Promise.resolve(responseData.results)
        } else {
          return Promise.reject('data not found')
        }
      })
  }

  static tvList (genre = '') {
    return axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_adult=false&with_genres=${genre}`)
      .then(response => {
        const responseData = response.data
        if (responseData.results) {
          return Promise.resolve(responseData.results)
        } else {
          return Promise.reject('data not found')
        }
      })
  }

  static searchData (query) {
    return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(response => {
        const responseData = response.data
        if (responseData.results) {
          return Promise.resolve(responseData.results)
        } else {
          return Promise.reject(`data dengan keyword ${query} tidak ditemukan`)
        }
      })
  }

  static genreList (type) {
    return axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        const responseData = response.data
        console.log(responseData.genres)
        if (responseData.genres) {
          return Promise.resolve(responseData.genres)
        } else {
          return Promise.reject('genre not found')
        }
      })
  }
}
export default DataSource
