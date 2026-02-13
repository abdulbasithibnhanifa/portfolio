import { motion } from 'framer-motion';
import { Card as BSCard } from 'react-bootstrap';

const Card = ({ children, className, hover = true, ...props }) => {
    return (
        <BSCard
            as={motion.div}
            whileHover={hover ? { y: -5 } : {}}
            className={`glass-card text-white overflow-hidden border-0 ${className || ''}`}
            {...props}
        >
            <div className="position-absolute top-0 start-0 w-100 h-1 bg-gradient-neon opacity-0 transition-opacity duration-300 group-hover-opacity-100"
                style={{ background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))' }}
            />
            <BSCard.Body className="p-4">
                {children}
            </BSCard.Body>
        </BSCard>
    );
};

export default Card;
