class FooterRestaurant extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
  <!-- Footer Icon -->
  <section class="ft-sosmed">
    <ul class="ft-sosmed-list">
      <li><a href="mailto:jdih@tanggerangselatankota.go.id"><i class="fa-solid fa-envelope"></i></a></li>
      <li><a href="https://twitter.com/humastangsel"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.instagram.com/pemkottangsel/?hl=id"><i class="fab fa-instagram"></i></a></li>
    </ul>
    <ul>
      <li class="watermark">Copyright © 2023 - Batary Apps</li>
    </ul>
  </section>
      `;
    }
  }
  
  customElements.define("restaurant-footer", FooterRestaurant);
  