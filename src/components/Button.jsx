import { motion } from 'framer-motion';
import { Button as BSButton } from 'react-bootstrap';

const Button = ({ children, className, variant = 'primary', ...props }) => {

    // Map custom variants to Bootstrap variants or custom classes
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'btn-primary'; // Custom CSS overrides this to be neon outline
            case 'secondary':
                return 'btn-outline-secondary text-light';
            case 'glow':
                return 'btn-glow'; // Custom CSS class
            default:
                return 'btn-primary';
        }
    };

    return (
        <BSButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${getVariantStyles()} ${className || ''} position-relative px-4 py-2 rounded-2`}
            {...props}
        >
            {children}
        </BSButton>
    );
};

export default Button;
