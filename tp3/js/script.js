// ===== MAROC DIGITAL SOLUTIONS =====
console.log("Afriquia Gaz - Leader marocain en distribution de gaz - Butane & Propane");

// ===== PAGE HIGHLIGHTING =====
// Highlight active navigation link based on current page
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('nav a');
  
  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentLocation || (!currentLocation && href === 'index.html')) {
      link.style.backgroundColor = '#0066cc';
      link.style.color = 'white';
    }
  });
});

// ===== FORM VALIDATION =====
// Enhanced form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Validate at least one checkbox is selected for services
      const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
      const interventionRadios = document.querySelectorAll('input[name="intervention"]:checked');
      
      if (interventionRadios.length === 0) {
        e.preventDefault();
        alert('Veuillez sélectionner un type d\'intervention');
        return;
      }
      
      // Show success message
      e.preventDefault();
      const formData = new FormData(form);
      console.log('Formulaire soumis avec les données:', Object.fromEntries(formData));
      alert('Merci pour votre demande ! Nous vous contactons bientôt.');
      form.reset();
    });
  }
});

// ===== SMOOTH SCROLL =====
// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// ===== LAZY LOAD IMAGES =====
// Lazy loading for images (if supported by browser)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== DYNAMIC TABLE FORMATTING =====
// Add hover effects and alternating colors to tables
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('table').forEach(table => {
    table.addEventListener('mouseover', function(e) {
      if (e.target.tagName === 'TD' || e.target.tagName === 'TH') {
        const row = e.target.closest('tr');
        if (row) {
          row.style.backgroundColor = '#e8f0ff';
        }
      }
    });
    
    table.addEventListener('mouseout', function(e) {
      if (e.target.tagName === 'TD' || e.target.tagName === 'TH') {
        const row = e.target.closest('tr');
        if (row) {
          row.style.backgroundColor = '';
        }
      }
    });
  });
});

// ===== COUNTER ANIMATION =====
// Animate numbers when they come into view
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const update = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  };
  
  update();
}

// ===== MODAL FOR GALLERY =====
// Simple modal for gallery images
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-container img');
  
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      const modal = document.createElement('div');
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        cursor: pointer;
      `;
      
      const modalImg = document.createElement('img');
      modalImg.src = this.src;
      modalImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
      `;
      
      modal.appendChild(modalImg);
      modal.addEventListener('click', function() {
        modal.remove();
      });
      
      document.body.appendChild(modal);
    });
  });
});

// ===== KEYBOARD NAVIGATION =====
// ESC key to close modals
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.querySelector('[style*="position: fixed"][style*="background: rgba(0, 0, 0, 0.9)"]');
    if (modal) {
      modal.remove();
    }
  }
});

// ===== FORM INPUT FEEDBACK =====
// Visual feedback for form inputs
document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.backgroundColor = '#f9f9f9';
    });
    
    input.addEventListener('blur', function() {
      this.style.backgroundColor = 'white';
    });
  });
});

// ===== ACCESSIBILITY: SKIP LINKS =====
// Skip to main content functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create skip link if it doesn't exist
  if (!document.querySelector('.skip-link')) {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Aller au contenu principal';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 0;
      background: #0066cc;
      color: white;
      padding: 8px;
      text-decoration: none;
      z-index: 100;
    `;
    skipLink.addEventListener('focus', function() {
      this.style.top = '0';
    });
    skipLink.addEventListener('blur', function() {
      this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
});

// ===== PERFORMANCE: DEBOUNCE FUNCTION =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===== RESPONSIVE IMAGE LOADING =====
// Load appropriate image size based on viewport
const loadResponsiveImages = debounce(function() {
  const images = document.querySelectorAll('img[data-responsive]');
  images.forEach(img => {
    const width = window.innerWidth;
    let src = img.dataset.large;
    
    if (width < 768) {
      src = img.dataset.small;
    } else if (width < 1200) {
      src = img.dataset.medium;
    }
    
    if (src && img.src !== src) {
      img.src = src;
    }
  });
}, 250);

window.addEventListener('resize', loadResponsiveImages);
window.addEventListener('load', loadResponsiveImages);

console.log('InnovaWeb Maroc - Script chargé avec succès');
