import { motion } from 'framer-motion';

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const getVariantStyles = () => {
        if (variant === 'primary') return 'neumorphic-btn-primary';
        return '';
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={`neumorphic-btn ${getVariantStyles()} ${className || ''}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
