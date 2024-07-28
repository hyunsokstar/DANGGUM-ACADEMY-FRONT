// src/components/CardForMainPageBodyMenu.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface CardForMainPageBodyMenuProps {
    id: string;
    title: string;
    description: string[];
    bgColor: string;
    link: string;
}

const CardForMainPageBodyMenu: React.FC<CardForMainPageBodyMenuProps> = ({ id, title, description, bgColor, link }) => {
    return (
        <Link href={link} className="block">
            <Card className={`rounded-lg shadow-md ${bgColor} text-white h-64 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl cursor-pointer`}>
                <CardHeader>
                    <h2 className="text-2xl font-bold">{title}</h2>
                </CardHeader>
                <CardContent>
                    {description.map((desc, index) => (
                        <p key={index} className="text-base mb-2">{desc}</p>
                    ))}
                </CardContent>
            </Card>
        </Link>
    );
};

export default CardForMainPageBodyMenu;