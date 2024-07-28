// src/components/Common/CommonButton.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'red' | 'green' | 'yellow' | 'purple';
    size?: 'sm' | 'md' | 'lg';
}

const variantClasses = {
    default: 'bg-blue-500 hover:bg-blue-600 text-white',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50',
    red: 'bg-red-500 hover:bg-red-600 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    yellow: 'bg-yellow-500 hover:bg-yellow-600 text-white',
    purple: 'bg-purple-500 hover:bg-purple-600 text-white',
};

const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
};

const CommonButton: React.FC<CommonButtonProps> = ({
    children,
    className,
    variant = 'default',
    size = 'md',
    ...props
}) => {
    const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

    return (
        <button
            className={twMerge(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default CommonButton;