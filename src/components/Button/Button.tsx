import React, { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  icon: React.ReactElement;
  type: 'addTask' | 'editTask' | 'actionIcon';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ icon, type, onClick, children }) => {
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
    type === 'addTask' ? 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-5 py-2.5' : '',
    type === 'editTask' ? 'bg-green-600 hover:bg-green-800 px-5 py-2.5' : ''
  )

  const iconClasses = classNames(
    children ? 'mr-2' : ''
  );

  return (
    <button type={type === 'actionIcon' ? 'button' : 'submit'} className={buttonClasses} onClick={onClick}>
      <span className={iconClasses}>{icon}</span>
      {children}
    </button>
  )
};

export default Button;
