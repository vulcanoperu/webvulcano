import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollReveal = () => {
    const location = useLocation()

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    // Optional: remove observer to only animate once
                    // observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

        // Target relevant elements for animation
        const selectors = [
            'h1', 'h2', 'h3',
            'p',
            '.section-tag',
            '.section-header',
            '.service-card',
            '.project-card-minimal',
            '.btn-glow',
            '.btn-primary',
            '.btn-secondary',
            '.service-item',
            '.value-card',
            '.team-card',
            '.info-card',
            '.cta-content'
        ]

        // Timeout to ensure DOM is ready after navigation
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll(selectors.join(','));
            let currentDelay = 0;
            let lastTop = 0;

            // First pass: instantly hide without transitions
            elements.forEach((el) => {
                if (el.classList.contains('reveal') || el.closest('.slider-track')) return; // Skip slider duplicates
                el.style.transition = 'none';
                el.classList.add('reveal');
            });

            // Force DOM reflow to apply classes instantly
            void document.body.offsetHeight;

            // Second pass: apply logic and observe
            elements.forEach((el) => {
                if(el.closest('.slider-track')) return;
                el.style.transition = '';
                
                const rectTop = el.getBoundingClientRect().top + window.scrollY;
                if (Math.abs(rectTop - lastTop) > 60) {
                    currentDelay = 0;
                    lastTop = rectTop;
                } else {
                    currentDelay += 150;
                }

                if (currentDelay > 0 && currentDelay <= 600) {
                    el.style.transitionDelay = `${currentDelay}ms`;
                }

                observer.observe(el);
            });
        }, 100)

        window.scrollTo(0, 0)

        return () => {
            observer.disconnect()
            clearTimeout(timer)
        }
    }, [location])

    return null
}

export default ScrollReveal
