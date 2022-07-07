import './tv-item.js'
class TvList extends HTMLElement {
  /**
     * @param {any} items
     */
  // eslint-disable-next-line accessor-pairs
  set tv (tv) {
    this._tv = tv
    this.render()
  }

  get dataDetail () {
    return this._tvDetail
  }

  clickEvent (tv) {
    this._tvDetail = tv
  }

  // eslint-disable-next-line accessor-pairs
  set clickEventHandler (e) {
    this._clickEventHandler = e
  }

  render () {
    this.innerHTML = ''
    this.className = 'row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3'
    this._tv.forEach(tv => {
      const tvElement = document.createElement('tv-item')
      tvElement.tv = tv
      this.appendChild(tvElement)
      tvElement.addEventListener('click', () => {
        this.clickEvent(tv)
        this._clickEventHandler()
      })
    })
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
customElements.define('tv-list', TvList)
