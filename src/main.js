document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const bentoItems = document.querySelectorAll('.bento-item');
  const statNumbers = document.querySelectorAll('.stat-number');

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Reveal Elements on Scroll
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealOnScroll.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  bentoItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
    revealOnScroll.observe(item);
  });

  // Counter Animation for Stats
  const animateStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.textContent);
        let count = 0;
        const duration = 2000;
        const increment = countTo / (duration / 16);

        const updateCount = () => {
          count += increment;
          if (count < countTo) {
            target.textContent = Math.floor(count) + '+';
            requestAnimationFrame(updateCount);
          } else {
            target.textContent = countTo + '+';
          }
        };
        updateCount();
        animateStats.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => animateStats.observe(stat));

  // Interactive Mesh Gradient (Subtle Mouse Follow)
  const mesh = document.querySelector('.mesh-gradient');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    if (mesh) {
      mesh.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
    }
  });

  console.log('Premium Experience Initialized');
});
