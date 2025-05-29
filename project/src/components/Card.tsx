import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

const Card = ({ children, onClick, isSelected, className = '' }: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`card cursor-pointer overflow-hidden ${isSelected ? 'ring-2 ring-blue-500' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;