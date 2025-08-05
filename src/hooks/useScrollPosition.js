import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        };

        // Add event listener on component mount
        window.addEventListener('scroll', updatePosition);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};