
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary', size = 'normal', type = 'button', disabled = false }) => {
  const baseClasses = "font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-105 duration-300 ease-in-out";
  
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
  };

  const sizeClasses = {
      normal: 'py-2.5 px-6 text-sm',
      large: 'py-3 px-8 text-base'
  }

  const disabledClasses = "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
