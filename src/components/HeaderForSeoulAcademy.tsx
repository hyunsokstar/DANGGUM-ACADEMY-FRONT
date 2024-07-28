// src/components/HeaderForSeoulAcademy.tsx

"use client";

import React from 'react';
import Link from 'next/link';

const HeaderForSeoulAcademy: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-4xl font-bold">Seoul Academy</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/schedule" className="hover:underline">스케쥴러</Link>
                        </li>
                        <li>
                            <Link href="#question-bank" className="hover:underline">문제 은행</Link>
                        </li>
                        <li>
                            <Link href="#admin" className="hover:underline">Admin</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default HeaderForSeoulAcademy;
