import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glow = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 font-display font-bold uppercase tracking-wider transition-all duration-300 clip-path-polygon group overflow-hidden";
  
  const variants = {
    primary: "bg-neon-cyan text-black hover:bg-white hover:text-neon-cyan",
    secondary: "bg-neon-purple text-white hover:bg-white hover:text-neon-purple",
    outline: "border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10",
  };

  const glowStyle = glow ? (variant === 'primary' ? 'shadow-[0_0_20px_rgba(0,243,255,0.6)]' : 'shadow-[0_0_20px_rgba(188,19,254,0.6)]') : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${glowStyle} ${className}`}
      style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Glitch overlay effect on hover could be added here */}
    </button>
  );
};

export default Button;