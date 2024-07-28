// components/ui/CommonInput.tsx
import React, { InputHTMLAttributes } from 'react';

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const CommonInput: React.FC<CommonInputProps> = ({ error, ...props }) => {
    return (
        <div className="flex flex-col gap-2">
            <input
                className="
                    w-full h-10 rounded-md pl-3
                    bg-white border border-neutral-300
                    focus:outline-none focus:border-orange-500
                    focus:ring-2 focus:ring-orange-500
                    placeholder:text-neutral-400
                "
                {...props}
            />
            {error && (
                <span className="text-red-500 font-medium">
                    {error}
                </span>
            )}
        </div>
    );
};

export default CommonInput;
