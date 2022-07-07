/* eslint-disable quotes */
import '../component/search-bar.js'
import '../component/movie-list.js'
import '../component/genre-list'
import '../component/detail-item'
import '../component/tv-list.js'
import $ from 'jquery'
import DataSource from '../data/data-source.js'
const main = () => {
  const data = {
    type: 'movie'
  }
  const movieListElement = document.querySelector('movie-list')
  const tvListElement = document.querySelector('tv-list')
  const genreListElement = document.querySelector('genre-list')
  const searchElement = document.querySelector('search-bar')
  const detailElement = document.querySelector('detail-item')
  const loaderItem = document.querySelector("#loaderItem")
  //   const typeButton = document.querySelector('input[name="type"]:checked').value

  const loadMovieList = async (genre = "") => {
    try {
      loaderItem.style.display = "block"
      const result = await DataSource.movieList(genre)
      tvListElement.style.display = 'none'
      movieListElement.style.display = 'flex'
      renderMovies(result)
    } catch (error) {
      fallbackResult(error)
    }
  }
  const loadGenreList = async (type) => {
    try {
      const result = await DataSource.genreList(type)
      renderGenre(result)
    } catch (error) {
      console.log(error)
    }
  }
  const loadTvList = async (genre = '') => {
    try {
      loaderItem.style.display = "block"
      const result = await DataSource.tvList(genre)
      tvListElement.style.display = 'flex'
      movieListElement.style.display = 'none'
      renderTvShows(result)
    } catch (error) {
      fallbackResult(error)
    }
  }
  const onButtonSearchClicked = () => {
    if (searchElement.value === "") {
      if (data.type === "movie") {
        loadMovieList()
      } else {
        loadTvList()
      }
    } else {
      searchMovie()
    }
  }
  const searchMovie = async () => {
    try {
      const result = await DataSource.searchData(searchElement.value)
      tvListElement.style.display = 'none'
      movieListElement.style.display = 'flex'
      renderMovies(result)
    } catch (error) {
      fallbackResult(error)
    }
  }
  const renderMovies = (movies) => {
    movieListElement.movies = movies
    loaderItem.style.display = "none"
  }
  const renderTvShows = tv => {
    tvListElement.tv = tv
    loaderItem.style.display = "none"
  }
  const renderGenre = (genres) => {
    genreListElement.genres = genres
  }
  const renderDetail = (movie) => {
    movieListElement.style.display = "none"
    tvListElement.style.display = "none"
    detailElement.style.display = 'block'
    detailElement.movie = movie
  }
  const onGenreChanged = () => {
    if (data.type === "movie") {
      loadMovieList(genreListElement.value)
    } else {
      loadTvList(genreListElement.value)
    }
  }

  const onClickItem = () => {
    if (data.type === "movie") {
      renderDetail(movieListElement.dataDetail)
    } else {
      renderDetail(tvListElement.dataDetail)
    }
  }

  const backHandler = () => {
    if (data.type === "movie") {
      detailElement.style.display = 'none'
      tvListElement.style.display = 'none'
      movieListElement.style.display = 'flex'
    } else {
      detailElement.style.display = 'none'
      tvListElement.style.display = 'flex'
      movieListElement.style.display = 'none'
    }
  }
  const fallbackResult = (error) => {
    loaderItem.style.display = "none"
    movieListElement.renderError(error)
  }
  loadMovieList()
  loadGenreList('movie')
  searchElement.clickEvent = onButtonSearchClicked
  $('input[type=radio][name=type]').on('change', function () {
    if (this.value === 'movie') {
      data.type = "movie"
      loadMovieList()
    } else if (this.value === 'tv') {
      data.type = "tv"
      loadTvList()
    }
    loadGenreList(this.value)
  })
  genreListElement.changeEvent = onGenreChanged
  movieListElement.clickEventHandler = onClickItem
  tvListElement.clickEventHandler = onClickItem
  detailElement.backHandler = backHandler
}

export default main
