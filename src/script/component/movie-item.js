/* eslint-disable accessor-pairs */
import { POSTER_URL } from '../utils/const-var'
class MovieItem extends HTMLElement {
  /**
     * @param {any} movie
     */
  set movie (movie) {
    this._movie = movie
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="col d-flex h-100 ">
      <div id="card-movie" class="card mb-3  w-100" data-id="${this._movie.id}">
        <img src="${POSTER_URL}${this._movie.poster_path}" alt="Image not found"
          class="img-card card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title mb-1">${this._movie.original_title !== undefined ? this._movie.original_title : this._movie.name}</h5>
          <p class="card-text genre mb-2">
            <span class="float-start"><i class="bi bi-calendar-date-fill"></i> ${this._movie.release_date !== undefined ? this._movie.release_date : this._movie.first_air_date}</span>
            <span class="float-end"><i class="bi bi-star-fill"></i> ${this._movie.vote_average}</span>
          </p>
          <p class="card-text desc card-text">
          ${this._movie.overview}
          </p>
        </div>
      </div>
    </div>
      `
  }
}
customElements.define('movie-item', MovieItem)
