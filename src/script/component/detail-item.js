/* eslint-disable accessor-pairs */
import {
  POSTER_URL
} from '../utils/const-var'
class DetailItem extends HTMLElement {
  /**
   * @param {any} movie
   */
  set movie (movie) {
    this._movie = movie
    this.render()
  }

  set showEvent (e) {
    this._showEvent = e
  }

  set backHandler (e) {
    this._backHandler = e
  }

  render () {
    this.innerHTML = `
    <style>
    .img-responsive {
      border-radius:25px;
    }
    </style>
        <div class="d-flex flex-row justify-content-between ">
              
        <h4>${this._movie.original_title !== undefined ? this._movie.original_title : this._movie.name}</h4>
        <button id="back-button" type="button" class="btn btn-outline-secondary" ><i class="bi bi-arrow-left-circle"></i> back</button>
      
      </div>
     
      <div class="row mt-3 mb-3"> 
        <div class="col-md-4">
         <img class="img-responsive" src="${POSTER_URL}${this._movie.poster_path}" style="width:100%" alt="">
        </div>
        <div class="col-md-8 d-grid">
   
         <p> ${this._movie.overview}</p>
         <div class="d-flex flex-row justify-content-between">
           <span ><i class="bi bi-calendar-date-fill"></i> ${this._movie.release_date !== undefined ? this._movie.release_date : this._movie.first_air_date}</span>
           <span ><i class="bi bi-star-fill"></i>${this._movie.vote_average}</span>
           <span ><i class="bi bi-soundwave"></i>${this._movie.original_language}</span>
         
       </div>
   
      `
    this.querySelector('#back-button').addEventListener('click', this._backHandler)
  }
}
customElements.define('detail-item', DetailItem)
