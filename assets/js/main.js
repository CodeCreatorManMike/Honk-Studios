// Placeholder WhatsApp number until Honk Studios provides the real one.
const WHATSAPP_NUMBER = "447700900123";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const HEADER_HTML = `
<header class="site-header">
  <div class="header-inner">
    <a href="index.html" class="logo">
      <img src="assets/icons/png/honk-logo.png" alt="Honk Studios">
    </a>
    <button class="nav-toggle" aria-label="Toggle menu">&#9776;</button>
    <nav class="main-nav" id="main-nav">
      <a href="index.html" data-page="index">Home</a>
      <a href="studio-services.html" data-page="studio-services">Studio Services</a>
      <a href="rehearsal-space.html" data-page="rehearsal-space">Rehearsal Space</a>
      <a href="equipment.html" data-page="equipment">Equipment</a>
      <a href="listen.html" data-page="listen">Listen</a>
      <a href="visit.html" data-page="visit">Visit</a>
      <a href="contact.html" data-page="contact">Contact</a>
    </nav>
    <div class="header-cta">
      <a class="btn btn-primary" target="_blank" rel="noopener" href="${waLink("Hi Honk Studios! I'd like to book on WhatsApp.")}">
        <img src="assets/icons/svg/whatsapp.svg" alt="">
        <span class="btn-label">Book on WhatsApp</span>
      </a>
    </div>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <img src="assets/icons/png/honk-logo.png" alt="">
          Honk Studios
        </div>
        <p class="footer-desc">Recording studio, rehearsal space and creative sound services in the heart of Oxford. Artist-first, community-minded.</p>
        <div class="social-row">
          <a href="#" aria-label="Instagram"><img src="assets/icons/svg/link.svg" alt="" style="width:12px;filter:brightness(0) invert(1)"></a>
          <a href="#" aria-label="Facebook"><img src="assets/icons/svg/link.svg" alt="" style="width:12px;filter:brightness(0) invert(1)"></a>
          <a href="https://www.linkedin.com/in/robingallardop/" aria-label="LinkedIn"><img src="assets/icons/svg/link.svg" alt="" style="width:12px;filter:brightness(0) invert(1)"></a>
        </div>
      </div>
      <div>
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="studio-services.html">Studio Services</a></li>
          <li><a href="rehearsal-space.html">Rehearsal Space</a></li>
          <li><a href="equipment.html">Equipment</a></li>
          <li><a href="listen.html">Listen</a></li>
          <li><a href="visit.html">Visit</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="help.html">Help &amp; FAQs</a></li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li><a href="recording.html">Recording</a></li>
          <li><a href="mixing-editing.html">Mixing &amp; Editing</a></li>
          <li><a href="sound-design.html">Sound Design</a></li>
          <li><a href="podcasts-audio-drama.html">Podcasts / Audio Drama</a></li>
          <li><a href="rehearsal-space.html">Rehearsal Space</a></li>
          <li><a href="creative-projects.html">Creative Projects</a></li>
        </ul>
      </div>
      <div>
        <h4>Studio Info</h4>
        <ul>
          <li>Honk Studios</li>
          <li>9 Park End Street</li>
          <li>Oxford, OX1 1HH</li>
          <li>3 mins from Oxford station</li>
          <li><a class="btn btn-primary btn-sm" style="margin-top:6px" target="_blank" rel="noopener" href="${waLink("Hi Honk Studios! I'd like to book on WhatsApp.")}">Book on WhatsApp</a></li>
        </ul>
      </div>
      <div class="footer-goose">
        <img src="assets/geese/chatgpt-image-aug-13-2026-08-07-17-pm.png" alt="">
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2025 Honk Studios. All rights reserved.</span>
      <span><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms</a></span>
    </div>
  </div>
</footer>
`;

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Honk Studios",
  "url": "https://honkstudiosoxford.co.uk/",
  "image": "https://honkstudiosoxford.co.uk/assets/icons/png/honk-logo.png",
  "telephone": "+44 7700 900123",
  "email": "robin@honkstudios.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9 Park End Street",
    "addressLocality": "Oxford",
    "addressRegion": "Oxfordshire",
    "postalCode": "OX1 1HH",
    "addressCountry": "GB"
  },
  "areaServed": "Oxford, Oxfordshire",
  "priceRange": "£"
};

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = HEADER_HTML;
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  if (!document.getElementById("local-business-schema")) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-schema";
    script.textContent = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
    document.head.appendChild(script);
  }

  const current = document.body.getAttribute("data-page");
  document.querySelectorAll(`nav.main-nav a[data-page="${current}"]`).forEach(a => a.classList.add("active"));

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // Tabs (equipment page)
  document.querySelectorAll("[data-tabs]").forEach(group => {
    const buttons = group.querySelectorAll(".tab-btn");
    const panels = group.querySelectorAll(".tab-panel");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        group.querySelector(`.tab-panel[data-tab="${btn.dataset.tab}"]`).classList.add("active");
      });
    });
  });

  // Booking widget -> WhatsApp deep link
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const service = bookingForm.service.value;
      const date = bookingForm.date.value;
      const time = bookingForm.time.value;
      const name = bookingForm.name.value;
      const msg = `Hi Honk Studios! I'd like to book: ${service}.\nDate: ${date || "flexible"}\nTime: ${time || "flexible"}\nName: ${name || "-"}`;
      window.open(waLink(msg), "_blank");
    });
  }

  // Contact form -> WhatsApp deep link (no backend/payments yet)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.name.value;
      const email = contactForm.email.value;
      const subject = contactForm.subject.value;
      const message = contactForm.message.value;
      const msg = `Hi Honk Studios, my name is ${name}.\nSubject: ${subject}\n${message}\n(Email: ${email})`;
      window.open(waLink(msg), "_blank");
    });
  }

  // Generic quick-enquiry buttons: data-wa-message="..."
  document.querySelectorAll("[data-wa-message]").forEach(el => {
    el.setAttribute("href", waLink(el.getAttribute("data-wa-message")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
});
