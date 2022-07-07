
class GenreList extends HTMLElement {
  /**
     * @param {any} genres
     */
  // eslint-disable-next-line accessor-pairs
  set genres (genres) {
    console.log(genres)
    this._genres = genres

    this.render()
  }

  /**
     * @param {any} e
     */
  // eslint-disable-next-line accessor-pairs
  set changeEvent (e) {
    this._changeEvent = e
  }

  get value () {
    return this.querySelector('#genre-select').value
  }

  render () {
    this.innerHTML = `
    <style>
    .form-select {
        background-color: #00B4D8 !important;
        color: white;

    }
    </style>
    `
    let content = ' <select id="genre-select" class="form-select" aria-label="Default select example">'
    content += '  <option value="" selected>All</option>'
    this._genres.forEach(genre => {
      content += `  <option value="${genre.id}">${genre.name}</option>`
    })
    content += '</select>'
    this.innerHTML += content
    this.querySelector('#genre-select').addEventListener('change', this._changeEvent)
  }

  renderError (message) {
    this.innerHTML = `
    <style>
    .error-message{
      text-align: center
    }
    </style>
    <h2 class="error-message">${message}</h2> `
  }
}
customElements.define('genre-list', GenreList)
