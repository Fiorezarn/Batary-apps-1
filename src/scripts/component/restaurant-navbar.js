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
    
    const dropdown = this.querySelector('.dropdown');
    const kanan = this.querySelector('.kanan');
    const sisikanan = this.querySelector('.sisi-kanan');

    dropdown.addEventListener('click', function() {
      this.classList.toggle('ubah');
      kanan.classList.toggle('ubah');
      sisikanan.classList.toggle('ubah');
    });

    sisikanan.addEventListener('click', function() {
      this.classList.remove('ubah');
      kanan.classList.remove('ubah');
      dropdown.classList.remove('ubah');
    });
  }
}

customElements.define("restaurant-navbar", NavbarRestaurant);
