// src/components/Common/CommonInput.tsx
import React, { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
    ({ error, className, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <input
                    ref={ref}
                    className={twMerge(
                        "w-full h-10 rounded-md px-3",
                        "bg-white border border-neutral-300",
                        "focus:outline-none focus:border-blue-500",
                        "focus:ring-2 focus:ring-blue-500",
                        "placeholder:text-neutral-400",
                        error && "border-red-500",
                        className
                    )}
                    aria-invalid={error ? 'true' : 'false'}
                    {...props}
                />
                {error && (
                    <span className="text-red-500 text-sm" role="alert">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

CommonInput.displayName = 'CommonInput';

export default CommonInput;