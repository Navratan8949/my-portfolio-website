import { useEffect, useState } from 'react';
import './ScrollToTopButton.css'; // Import CSS file for styling
import { HiArrowNarrowUp } from "react-icons/hi";


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to the top of the page smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scroll-to-top-button ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
            <HiArrowNarrowUp />
        </div>
    );
};

export default ScrollToTopButton;
