import React from 'react'

interface ButtonProps {
    onClick?: () => void;
    name: string;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}
export const Button: React.FC<ButtonProps> = ({
    onClick,
    name,
    className,
    disabled = false,
    type = 'button',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                bg-violet-600 text-white font-bold py-2 px-4 rounded
                transition-all duration-300 ease-in-out
                hover:bg-violet-700 hover:shadow-lg hover:scale-105
                active:scale-95 active:shadow-md
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                ${className}
            `}
            data-testid={`button-${name.toLowerCase().replace(/\s+/g, "-")}`}
        >
            {name}
        </button>
    )
}


export default Button;
