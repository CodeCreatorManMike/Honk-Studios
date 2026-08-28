// Honk Studios WhatsApp number
const WHATSAPP_NUMBER = "447592399014";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Context-aware default message for the header/footer "Book on WhatsApp" button,
// keyed by the current page's data-page attribute.
const PAGE_WA_MESSAGES = {
  "index": "Hi Honk Studios! I'd like to book on WhatsApp.",
  "studio-services": "Hi Honk Studios! I'd like to discuss studio services — which one:",
  "recording": "Hi Honk Studios! I'd like to book a recording session — what I'm recording:",
  "mixing-editing": "Hi Honk Studios! I'd like to ask about mixing/editing for a project — details:",
  "sound-design": "Hi Honk Studios! I'd like to ask about sound design for a project — details:",
  "podcasts-audio-drama": "Hi Honk Studios! I'd like to ask about recording a podcast/audio drama — details:",
  "live-theatre": "Hi Honk Studios! I'd like to ask about live theatre sound — details:",
  "foley-sound-design": "Hi Honk Studios! I'd like to ask about foley/sound design for a video project — details:",
  "audio-books": "Hi Honk Studios! I'd like to ask about audiobook recording — details:",
  "creative-projects": "Hi Honk Studios! I'd like to discuss a creative/collaborative audio project — details:",
  "rehearsal-space": "Hi Honk Studios! I'd like to check rehearsal space availability and rates.",
  "equipment": "Hi Honk Studios! I'd like to ask about equipment / engineer availability for a session.",
  "listen": "Hi Honk Studios! I'd like to discuss a project after listening to your work.",
  "visit": "Hi Honk Studios! I'd like to arrange a visit to the studio.",
  "contact": "Hi Honk Studios! I have a question about booking / rates.",
  "about": "Hi Honk Studios! I'd like to know more about the studio.",
  "help": "Hi Honk Studios! I have a question that wasn't answered on the Help page:",
};

function headerWaMessage() {
  const page = document.body.getAttribute("data-page");
  return PAGE_WA_MESSAGES[page] || PAGE_WA_MESSAGES.index;
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
      <a class="btn btn-primary" target="_blank" rel="noopener" href="#" data-wa-header>
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
          <a href="#" aria-label="Instagram"><img src="assets/icons/svg/instagram.svg" alt="" style="width:14px"></a>
          <a href="#" aria-label="Facebook"><img src="assets/icons/svg/facebook.svg" alt="" style="width:14px"></a>
          <a href="https://www.linkedin.com/in/robingallardop/" aria-label="LinkedIn"><img src="assets/icons/svg/linkedin.svg" alt="" style="width:14px"></a>
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
          <li><a class="btn btn-primary btn-sm" style="margin-top:6px" target="_blank" rel="noopener" href="#" data-wa-header>Book on WhatsApp</a></li>
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
  "telephone": "+44 7592 399014",
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

  document.querySelectorAll("[data-wa-header]").forEach(el => {
    el.setAttribute("href", waLink(headerWaMessage()));
  });

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
  const header = document.querySelector("header.site-header");
  if (toggle && nav) {
    let scrollY = 0;
    const setNavOpen = (open) => {
      nav.classList.toggle("open", open);
      nav.style.top = open && header ? header.offsetHeight + "px" : "";
      toggle.innerHTML = open ? "&#10005;" : "&#9776;";
      toggle.setAttribute("aria-expanded", String(open));
      // iOS Safari ignores overflow:hidden on body for scroll locking, so pin it
      // in place with position:fixed and restore the scroll position on close.
      if (open) {
        scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.classList.add("nav-open");
      } else {
        document.body.classList.remove("nav-open");
        document.body.style.top = "";
        window.scrollTo(0, scrollY);
      }
    };
    toggle.addEventListener("click", () => setNavOpen(!nav.classList.contains("open")));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setNavOpen(false)));
  }

  // FAQ accordions (service sub-pages): turn flat Q/A info-cards into expand/collapse items
  document.querySelectorAll(".faq-list .info-card").forEach(card => {
    const q = card.querySelector("h3");
    const a = card.querySelector("p");
    if (!q || !a) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "faq-q";
    btn.setAttribute("aria-expanded", "false");
    const chevron = document.createElement("span");
    chevron.className = "faq-chevron";
    chevron.textContent = "↓";
    btn.appendChild(q);
    btn.appendChild(chevron);
    const answerWrap = document.createElement("div");
    answerWrap.className = "faq-a";
    answerWrap.appendChild(a);
    card.innerHTML = "";
    card.appendChild(btn);
    card.appendChild(answerWrap);
    btn.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

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
