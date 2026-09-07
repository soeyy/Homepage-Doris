// public/custom-elements/doris-home.js
import { dorisStyles } from "style.js";
class DorisHome extends HTMLElement {
  constructor() {
    super();
    this._data = null;
  }

  set data(value) {
    this._data = value;
    this.render();
  }

  render() {
    if (!this._data) return;
    const d = this._data;

    this.innerHTML = `
      <style>${dorisStyles}</style>
      <section class="hero">
        <div class="container hero-content">
          <div class="hero-text fade-in">
            <div class="hero-label">${d.heroLabel}</div>
            <h1 class="hero-title">${d.heroTitel}</h1>
            <p class="hero-subtitle">${d.heroSubtext}</p>
            <div class="hero-cta">
              <a href="${d.heroButton1Link}" class="btn btn-primary btn-lg">${d.heroButton1}</a>
              <a href="${d.heroButton2Link}" class="btn btn-secondary btn-lg">${d.heroButton2}</a>
            </div>
          </div>
          <div class="hero-image fade-in">
            <div class="hero-image-wrapper img-zoom">
              <img src="${d.heroBild}" alt="${d.heroTitel}">
            </div>
          </div>
        </div>
      </section>

      <section class="section bg-white-soft">
        <div class="container">
          <div id="events-grid" class="events-grid"></div>
        </div>
      </section>

      <section class="section cta">
        <div class="container cta-content">
          <h2 class="cta-title fade-in">${d.ctaTitel}</h2>
          <p class="cta-text fade-in">${d.ctaText}</p>
          <a href="/online-buchen" class="btn btn-white btn-lg">${d.ctaButton}</a>
        </div>
      </section>
    `;

    if (d.events) this.renderEvents(d.events);
  }

  renderEvents(events) {
    const grid = this.querySelector('#events-grid');
    if (!grid) return;
    grid.innerHTML = events.map(e => `
      <article class="event-card card-shine">
        <img src="${e.bild}" alt="${e.titel}" class="event-image">
        <div class="event-content">
          <span class="event-date">📅 ${e.datum}</span>
          <h3 class="event-title">${e.titel}</h3>
          <div class="event-location">📍 ${e.ort}</div>
          <p class="event-description">${e.beschreibung}</p>
          <a href="${e.buttonLink}" class="btn btn-secondary">${e.buttonText}</a>
        </div>
      </article>
    `).join('');
  }
}

customElements.define('doris-home', DorisHome);