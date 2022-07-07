class TopBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
    <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="topnav logo">
        <img src="./assets/logo.png" width="100px" alt="">
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link active" href="#koleksi">Koleksi</a></li>
        </ul>
      </div>
    </nav>
    </header>
  `
  }
}
customElements.define('top-bar', TopBar)
