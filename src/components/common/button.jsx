import { forwardRef } from 'react';
import classNames from 'classnames';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-bgYellow text-black hover:bg-yellow-400 focus:ring-yellow-500 hover:scale-105',
    secondary: 'border-2 border-primary-bgYellow text-primary-bgYellow hover:bg-primary-bgYellow hover:text-black focus:ring-yellow-500',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    dark: 'bg-primary-bgLightBlack text-white hover:bg-gray-800 focus:ring-gray-500',
    white: 'bg-white text-black hover:bg-gray-100 focus:ring-gray-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const classes = classNames(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );
  
  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
