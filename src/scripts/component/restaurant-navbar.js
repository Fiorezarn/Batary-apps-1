class NavbarRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
        <div class="container-flex">
          <div class="brand">
          <img class="logo" src="images/LOGO.png">
          </div>
          <div class="dropdown">
            <div class="icon1"></div>
            <div class="icon2"></div>
            <div class="icon3"></div>
          </div>
          <div class="sisi-kanan"></div>
          <ul class="kanan">
            <li><a href="index.html">Home <i class="fa-solid fa-house"></i></a></li>
            <li><a href="#home">Favorite <i class="fa-solid fa-heart fa-beat-fade"></i></a></li>
            <li><a href="#bawah">About Us <i class="fa-solid fa-user"></i></a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define("restaurant-navbar", NavbarRestaurant);
