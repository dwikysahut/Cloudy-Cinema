class FooterBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <footer>
      <p>Cloudy Cinema &#169; 2022, Dwiky Satria Hutomo</p>
     </footer>
    `
  }
}
customElements.define('footer-bar', FooterBar)
