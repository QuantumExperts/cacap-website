/* ============================================================
   CACAP â€” Shared Navigation, Footer, and Interactivity
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- INJECT HEADER ---
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
    <div class="header-top">
      <div class="logo-area">
        <a href="index.html">
          <img src="images/logo.jpg" alt="CACAP Logo" class="logo-img">
          <div class="logo-text">Construction Arbitration<br>Centre Asia Pacific<span>CACAP</span></div>
        </a>
      </div>
      <div><a class="btn-nom" href="nomination-request.html">Nomination Request</a></div>
    </div>
    <nav class="main-nav">
      <div class="nav-inner">
        <div class="nav-item"><a class="nav-link" href="index.html">Home</a></div>
        <div class="nav-item">
          <a class="nav-link" href="about.html">About</a>
          <div class="nav-dropdown">
            <a href="about.html">Board of Directors</a>
            <a href="rules.html">Rules &amp; Process</a>
            <a href="faqs.html">FAQs</a>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="services.html">Services</a>
          <div class="nav-dropdown">
            <a href="arbitration.html">Arbitration</a>
            <a href="mediation.html">Mediation</a>
            <a href="expert-determination.html">Expert Determination</a>
            <a href="expert-witness.html">Expert Witness</a>
            <a href="dispute-boards.html">Dispute Boards</a>
            <a href="adjudication.html">Adjudication</a>
            <a href="nomination.html">Nomination</a>
            <a href="admin-services.html">Dispute Resolution Administration</a>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-link accred-link" href="accreditation.html">Accreditation</a>
          <div class="nav-dropdown">
            <a href="accreditation.html">Accreditation Scheme</a>
            <a href="panels.html">Accredited Panels</a>
            <a href="training.html">Training Courses</a>
            <a href="register.html">Register Interest</a>
            <a href="scheme-terms.html">Scheme Terms</a>
          </div>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="membership.html">Membership</a>
          <div class="nav-dropdown">
            <a href="membership.html">Join CACAP</a>
            <a href="membership-apply.html">Apply for Membership</a>
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
    'about.html': 'About', 'rules.html': 'About', 'faqs.html': 'About',
    'services.html': 'Services', 'arbitration.html': 'Services', 'mediation.html': 'Services',
    'expert-determination.html': 'Services', 'expert-witness.html': 'Services',
    'dispute-boards.html': 'Services', 'adjudication.html': 'Services',
    'nomination.html': 'Services', 'admin-services.html': 'Services',
    'nomination-request.html': 'Services',
    'accreditation.html': 'Accreditation', 'panels.html': 'Accreditation',
    'training.html': 'Accreditation', 'register.html': 'Accreditation',
    'scheme-terms.html': 'Accreditation',
    'membership.html': 'Membership', 'membership-apply.html': 'Membership',
    'contact.html': 'Contact'
  };
  const activeLabel = navMap[currentPage];
  if (activeLabel) {
    document.querySelectorAll('.nav-link').forEach(function (link) {
      if (link.textContent.trim() === activeLabel) {
        link.classList.add('active');
      }
    });
  }

  // --- INJECT FOOTER ---
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="logo-text" style="margin-bottom:16px;">Construction Arbitration<br>Centre Asia Pacific<span>CACAP</span></div>
        <p style="font-size:14px;line-height:1.6;max-width:280px;">The premier institution for resolving construction and infrastructure disputes in the Asia Pacific region.</p>
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
        <h4>Accreditation</h4>
        <a href="accreditation.html">Accreditation Scheme</a>
        <a href="panels.html">Accredited Panels</a>
        <a href="training.html">Training Courses</a>
        <a href="register.html">Register Interest</a>
        <a href="scheme-terms.html">Scheme Terms</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <p style="font-size:14px;line-height:1.6;margin-bottom:8px;">65/158 Chamnan Phenjati Business Center, Floor 19, Bangkok 10310, Thailand</p>
        <a href="mailto:info@cacap.asia" style="color:#C8A45E;">info@cacap.asia</a>
        <p style="font-size:13px;margin-top:12px;">All enquiries should be made in writing initially.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Construction Arbitration Centre (Asia Pacific). All rights reserved.</span>
      <span>
        <a href="scheme-terms.html">Scheme Terms</a> &middot;
        <a href="#">Privacy Policy</a> &middot;
        <a href="#">Terms &amp; Conditions</a>
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
});
