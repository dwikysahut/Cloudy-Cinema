import { POSTER_URL } from '../utils/const-var'
class TvItem extends HTMLElement {
  // eslint-disable-next-line accessor-pairs
  set tv (tv) {
    this._tv = tv
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="col-sm d-flex h-100">
    <div class="card mb-3" data-id="${this._tv.id}">
      <img src="${POSTER_URL}${this._tv.poster_path}"
        class="img-card card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title mb-1">${this._tv.name}</h5>
        <p class="card-text genre mb-2">
          <span class="float-start">${this._tv.first_air_date}</span>
          <span class="float-end">${this._tv.vote_average}</span>
        </p>
        <p class="card-text desc card-text">
        ${this._tv.overview}
        </p>
      </div>
    </div>
  </div>
    `
  }
}
customElements.define('tv-item', TvItem)
