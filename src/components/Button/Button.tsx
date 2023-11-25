import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  icon: React.ReactElement;
  variant: 'primary' | 'secondary' | 'actionIcon' | 'danger';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  specialClass?: string;
  disabled?: boolean;
  type: 'submit' | 'button',
}

const Button: React.FC<ButtonProps> = ({ icon, variant, onClick, children, specialClass, disabled, type }) => {
  const buttonClasses = classNames(
    'text-white',
    'inline-flex',
    'items-center',
    'focus:ring-4',
    'focus:outline-none',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'w-max',
    'text-center',
    variant === 'primary' ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-5 py-2.5' : '',
    variant === 'secondary' ? 'bg-green-600 hover:bg-green-800 px-5 py-2.5' : '',
    variant === 'danger' ? 'bg-red-600 hover:bg-red-700 px-5 py-2.5' : '',
    specialClass ? specialClass : '',
    disabled ? 'opacity-50' : '',
  )

  const textClasses = classNames(
    'block',
    variant === 'danger' ? 'ml-1' : '',
    variant === 'primary' ? 'ml-2' : '',
    variant === 'secondary' ? 'ml-2' : '',
  )

  return (
    <button type={type} disabled={disabled} className={buttonClasses} onClick={onClick}>
      <span>{icon}</span>
      <span className={textClasses}>{children}</span>
    </button>
  )
};

export default Button;
