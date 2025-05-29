import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  icon,
}: ButtonProps) => {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : undefined}
      whileTap={!disabled ? { scale: 0.95 } : undefined}
      onClick={!disabled ? onClick : undefined}
      className={`${baseClass} ${variantClass} ${disabledClass} ${className} flex items-center justify-center gap-2`}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;