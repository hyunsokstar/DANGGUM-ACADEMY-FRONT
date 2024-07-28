// src/components/Common/CommonButton.tsx
import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

export interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
}

const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
} as const;

const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
} as const;

const CommonButton = forwardRef<HTMLButtonElement, CommonButtonProps>(
    ({ children, className, variant = 'primary', size = 'md', loading = false, disabled, ...props }, ref) => {
        const baseClasses = 'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center';

        return (
            <button
                ref={ref}
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
    }
);

CommonButton.displayName = 'CommonButton';

export default CommonButton;