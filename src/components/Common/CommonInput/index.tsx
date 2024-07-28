import React, { InputHTMLAttributes } from 'react';

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | string[];
}

const CommonInput: React.FC<CommonInputProps> = ({ error, ...props }) => {
    const errorMessage = Array.isArray(error) ? error[0] : error;

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
            {errorMessage && (
                <span className="text-red-500 font-medium">
                    {errorMessage}
                </span>
            )}
        </div>
    );
};

export default CommonInput;