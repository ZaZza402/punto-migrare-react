import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Define the animation properties
const animations = {
    initial: { opacity: 0, y: 20 },   // Start invisible and 20px down
    animate: { opacity: 1, y: 0 },     // Animate to fully visible and original position
    exit: { opacity: 0, y: -20 },  // Animate out by becoming invisible and moving 20px up
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }} // The animation will take 0.4 seconds
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;