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
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            data-testid="name"
        >
            {name}
        </button>
    )
}


export default Button;
