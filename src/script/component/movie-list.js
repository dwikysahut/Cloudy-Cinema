/* eslint-disable accessor-pairs */
import './movie-item.js'
class MovieList extends HTMLElement {
  /**
     * @param {any} items
     */
  // eslint-disable-next-line accessor-pairs
  set movies (movies) {
    this._movies = movies
    this.render()
  }

  get dataDetail () {
    return this._movieDetail
  }

  clickEvent (mov) {
    this._movieDetail = mov
  }

  set clickEventHandler (e) {
    this._clickEventHandler = e
  }

  render () {
    this.innerHTML = ''
    this.className = 'row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3'
    this._movies.forEach(movie => {
      const movieElement = document.createElement('movie-item')
      movieElement.movie = movie
      this.appendChild(movieElement)
      movieElement.addEventListener('click', () => {
        this.clickEvent(movie)
        this._clickEventHandler()
      })
    })
  }

  renderError (message) {
    this.innerHTML = `
    <style>
    .error-message{
      text-align: center,
      width: 100%
    }
    </style>
    <h2 class="error-message">${message}</h2> `
  }
}
customElements.define('movie-list', MovieList)
