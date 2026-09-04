/**
 * GAS // TACTICAL FPS SHOOTER - INTERACTION SCRIPTS
 * Pure Vanilla JavaScript (Zero dependencies, GitHub Pages compatible)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. STICKY NAVBAR SCROLL EFFECT
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. MOBILE NAVIGATION MENU TOGGLE
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking on any link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('mobile-open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // 3. ACTIVE NAV LINK ON SCROLL (IntersectionObserver)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  // 4. WEAPON CATEGORY FILTER
  const filterBtns = document.querySelectorAll('.filter-btn');
  const weaponCards = document.querySelectorAll('.weapon-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      weaponCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. LIGHTBOX MODAL FOR WEAPON / IMAGE INSPECTION
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(imgSrc, title, desc) {
    if (!lightbox) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc || 'Tactical Asset Preview';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  // Bind click on weapon cards
  weaponCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const name = card.querySelector('.weapon-name')?.textContent || 'Weapon';
      const category = card.querySelector('.weapon-category')?.textContent || '';
      const imgSrc = img ? img.src : '';
      openLightbox(imgSrc, name, `Classification: ${category} | High-impact ballistics.`);
    });
  });

  // Bind click on map image
  const mapImgContainer = document.querySelector('.map-image-container');
  if (mapImgContainer) {
    mapImgContainer.style.cursor = 'zoom-in';
    mapImgContainer.addEventListener('click', () => {
      const img = mapImgContainer.querySelector('img');
      if (img) {
        openLightbox(img.src, 'Military Island - Strategic Cartography', 'Overview of terrain, firing ranges, bunkers, and tactical points of interest.');
      }
    });
  }

  // 6. COPY CONTACT EMAIL TO CLIPBOARD
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailTextElem = document.getElementById('devEmail');

  if (copyBtn && emailTextElem) {
    copyBtn.addEventListener('click', () => {
      const email = emailTextElem.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'COPIED!';
        copyBtn.style.background = 'var(--accent-amber)';
        copyBtn.style.color = '#000';
        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2200);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }
});

