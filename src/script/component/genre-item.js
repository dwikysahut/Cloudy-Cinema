/* eslint-disable accessor-pairs */
// import { POSTER_URL } from '../utils/const-var'
class GenreItem extends HTMLElement {
  /**
     * @param {any} genre
     */
  set genre (genre) {
    this._genre = genre
    this.render()
  }

  render () {
    this.innerHTML = `
    <option value="${this._genre.id}">${this._genre.name}</option>
      `
  }
}
customElements.define('genre-item', GenreItem)
