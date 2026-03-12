/* ============================================================
   CACAP — Shared Navigation, Footer, and Interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- INJECT HEADER ---
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
    <a class="skip-to-content" href="#main-content">Skip to main content</a>
    <div class="header-top">
      <div class="logo-area">
        <a href="index.html" aria-label="CACAP Home">
          <img src="logo-white.png?v=2" alt="CACAP Logo" class="logo-img" width="64" height="64">
          <div class="logo-text">Construction Arbitration<br>Centre Asia Pacific<span>CACAP</span></div>
        </a>
      </div>
      <div class="header-right">
        <a class="btn-nom" href="nomination-request.html">Nomination Request</a>
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span class="nav-toggle-icon"></span>
        </button>
      </div>
    </div>
    <nav class="main-nav" id="main-nav" role="navigation" aria-label="Main navigation">
      <div class="nav-inner">
        <div class="nav-item"><a class="nav-link" href="index.html">Home</a></div>
        <div class="nav-item has-dropdown">
          <a class="nav-link" href="about.html">About</a>
          <div class="nav-dropdown" role="menu">
            <a href="about.html" role="menuitem">Executive Council</a>
            <a href="rules.html" role="menuitem">Rules &amp; Process</a>
            <a href="faqs.html" role="menuitem">FAQs</a>
            <a href="ethics-cpd.html" role="menuitem">Ethics &amp; CPD</a>
          </div>
        </div>
        <div class="nav-item has-dropdown">
          <a class="nav-link" href="services.html">Services</a>
          <div class="nav-dropdown" role="menu">
            <a href="arbitration.html" role="menuitem">Arbitration</a>
            <a href="mediation.html" role="menuitem">Mediation</a>
            <a href="expert-determination.html" role="menuitem">Expert Determination</a>
            <a href="expert-witness.html" role="menuitem">Expert Witness</a>
            <a href="dispute-boards.html" role="menuitem">Dispute Boards</a>
            <a href="nomination.html" role="menuitem">Nomination</a>
            <a href="nomination-fees.html" role="menuitem">Nomination Fees</a>
            <a href="admin-services.html" role="menuitem">Administration</a>
          </div>
        </div>
        <div class="nav-item has-dropdown">
          <a class="nav-link" href="accreditation.html">Accreditation</a>
          <div class="nav-dropdown" role="menu">
            <a href="accreditation.html" role="menuitem">Accreditation Scheme</a>
            <a href="panels.html" role="menuitem">Accredited Panels</a>
            <a href="training.html" role="menuitem">Training Courses</a>
            <a href="register.html" role="menuitem">Register Interest</a>
            <a href="scheme-terms.html" role="menuitem">Scheme Terms</a>
          </div>
        </div>
        <div class="nav-item has-dropdown">
          <a class="nav-link" href="membership.html">Membership</a>
          <div class="nav-dropdown" role="menu">
            <a href="membership.html" role="menuitem">Join CACAP</a>
            <a href="membership-apply.html" role="menuitem">Apply for Membership</a>
          </div>
        </div>
        <div class="nav-item"><a class="nav-link" href="contact.html">Contact</a></div>
      </div>
    </nav>`;
  }

  // --- HIGHLIGHT ACTIVE NAV ---
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navMap = {
    'index.html': 'Home',
    'about.html': 'About', 'rules.html': 'About', 'faqs.html': 'About', 'ethics-cpd.html': 'About',
    'services.html': 'Services', 'arbitration.html': 'Services', 'mediation.html': 'Services',
    'expert-determination.html': 'Services', 'expert-witness.html': 'Services',
    'dispute-boards.html': 'Services', 'nomination.html': 'Services',
    'nomination-fees.html': 'Services', 'admin-services.html': 'Services',
    'nomination-request.html': 'Services',
    'accreditation.html': 'Accreditation', 'panels.html': 'Accreditation',
    'training.html': 'Accreditation',
    'register.html': 'Accreditation', 'scheme-terms.html': 'Accreditation',
    'membership.html': 'Membership', 'membership-apply.html': 'Membership',
    'privacy-policy.html': 'Contact', 'terms.html': 'Contact',
    'contact.html': 'Contact'
  };
  const activeLabel = navMap[currentPage];
  if (activeLabel) {
    document.querySelectorAll('.nav-link').forEach(function (link) {
      if (link.textContent.trim() === activeLabel) {
        link.classList.add('active');
      }
    });
    // Also highlight dropdown items
    document.querySelectorAll('.nav-dropdown a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  }

  // --- MOBILE NAV TOGGLE ---
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('nav-open');
      this.classList.toggle('is-active', isOpen);
      this.setAttribute('aria-expanded', isOpen);
      // Prevent body scroll when nav is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close nav on link click (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
          mainNav.classList.remove('nav-open');
          navToggle.classList.remove('is-active');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // --- INJECT FOOTER ---
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo-text" style="margin-bottom:16px;">Construction Arbitration<br>Centre Asia Pacific<span>CACAP</span></div>
        <p style="font-size:14px;line-height:1.7;max-width:300px;margin-bottom:24px;">The appointing authority for construction and infrastructure dispute resolution across the Asia Pacific region.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <a href="accreditation.html">Accreditation</a>
        <a href="membership.html">Membership</a>
        <a href="nomination-request.html">Nomination Request</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="arbitration.html">Arbitration</a>
        <a href="mediation.html">Mediation</a>
        <a href="expert-determination.html">Expert Determination</a>
        <a href="expert-witness.html">Expert Witness</a>
        <a href="dispute-boards.html">Dispute Boards</a>
        <a href="admin-services.html">Administration</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <p style="font-size:14px;line-height:1.7;margin-bottom:12px;">Construction Arbitration Centre<br>(Asia Pacific)<br>65/158 Chamnan Phenjati<br>Business Center, Floor 19<br>Huay Kwang, Bangkok 10310<br>Thailand</p>
        <a href="mailto:info@cacap.asia" style="color:var(--gold);font-weight:600;">info@cacap.asia</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Construction Arbitration Centre (Asia Pacific). All rights reserved.</span>
      <span>
        <a href="privacy-policy.html">Privacy Policy</a> &middot;
        <a href="terms.html">Terms</a> &middot;
        <a href="scheme-terms.html">Scheme Terms</a> &middot;
        <a href="contact.html">Contact</a>
      </span>
    </div>`;
  }

  // --- FAQ TOGGLE ---
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      this.parentElement.classList.toggle('open');
    });
  });

  // --- RULES TABS ---
  document.querySelectorAll('.rules-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.rules-tab').forEach(function (t) { t.classList.remove('active'); });
      document.querySelectorAll('.rules-panel').forEach(function (p) { p.classList.remove('active'); });
      this.classList.add('active');
      var target = document.getElementById('tab-' + this.getAttribute('data-tab'));
      if (target) target.classList.add('active');
    });
  });

  // --- CLICKABLE CARDS ---
  document.querySelectorAll('.card').forEach(function (card) {
    var link = card.querySelector('.card-link');
    if (link && link.href) {
      card.style.cursor = 'pointer';
      card.setAttribute('role', 'link');
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', function (e) {
        if (e.target.tagName !== 'A') {
          window.location.href = link.href;
        }
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = link.href;
        }
      });
    }
  });

  // --- SMOOTH SCROLL FOR ANCHOR LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- SCROLL ANIMATIONS ---
  if ('IntersectionObserver' in window) {
    var animateObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          animateObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.card, .accred-card, .board-member, .info-box, .svc-cta, .cta-box').forEach(function (el) {
      el.classList.add('animate-on-scroll');
      animateObserver.observe(el);
    });
  }

  // --- HEADER COMPACT ON SCROLL ---
  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    var scrollThreshold = 80;
    var lastScrollY = 0;
    window.addEventListener('scroll', function () {
      var currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollY > scrollThreshold) {
        siteHeader.classList.add('header-compact');
      } else {
        siteHeader.classList.remove('header-compact');
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  // --- HERO SLIDE ROTATION ---
  var heroSlides = document.getElementById('hero-slides');
  if (heroSlides) {
    var slides = heroSlides.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
      var currentSlide = 0;
      setInterval(function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 6000);
    }
  }

  // --- FORM VALIDATION ENHANCEMENT ---
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('form-error');
          valid = false;
        } else {
          field.classList.remove('form-error');
        }
      });
      if (!valid) {
        e.preventDefault();
        var firstError = form.querySelector('.form-error');
        if (firstError) firstError.focus();
      }
    });
    // Clear error on input
    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        if (this.value.trim()) this.classList.remove('form-error');
      });
    });
  });
});
