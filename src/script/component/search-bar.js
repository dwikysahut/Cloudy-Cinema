class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  /**
   * @param {any} e
   */
  // eslint-disable-next-line accessor-pairs
  set clickEvent (e) {
    this._clickEvent = e
    this.render()
  }

  get value () {
    return this.querySelector('#searchItemTitle').value
  }

  render () {
    this.innerHTML = `
            <div class="row mb-2">
            <div class="search-container">
              <form id="searchItem">
                <input id="searchItemTitle" type="search" placeholder="Type here . . . ">
                <button id="searchSubmit" type="submit"><span class="bi-search"></span>Go</button>
              </form>
            </div>
          </div>`
    this.querySelector('#searchSubmit').addEventListener('click', (e) => {
      e.preventDefault()
      this._clickEvent()
    })
  }
}

customElements.define('search-bar', SearchBar)
