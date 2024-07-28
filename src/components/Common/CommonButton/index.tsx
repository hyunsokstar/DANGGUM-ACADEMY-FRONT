import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

export interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'red' | 'green' | 'yellow' | 'purple';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
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
    loading = false,
    disabled,
    ...props
}) => {
    const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center';

    return (
        <button
            className={twMerge(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                (loading || disabled) && 'opacity-50 cursor-not-allowed',
                className
            )}
            disabled={loading || disabled}
            {...props}
        >
            {loading ? (
                <>
                    <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                    로딩중...
                </>
            ) : children}
        </button>
    );
};

export default CommonButton;