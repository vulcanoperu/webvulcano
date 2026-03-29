import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Interactive3D = () => {
    const location = useLocation();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.service-card, .project-card-minimal, .project-item-ultra, .value-card');

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                // Sensitivity factors
                const rotateX = (centerY - y) / 20;
                const rotateY = (x - centerX) / 20;

                // Only apply if mouse is inside or very close (optional, but keeps it subtle)
                if (x > -100 && x < rect.width + 100 && y > -100 && y < rect.height + 100) {
                    card.style.setProperty('--rx', `${rotateX}deg`);
                    card.style.setProperty('--ry', `${rotateY}deg`);
                } else {
                    card.style.setProperty('--rx', '0deg');
                    card.style.setProperty('--ry', '0deg');
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [location]);

    return null;
};

export default Interactive3D;
