// src/components/CardForMainPageBodyMenu.tsx

"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface CardForMainPageBodyMenuProps {
    id: string;
    title: string;
    description: string[];
    bgColor: string;
}

const CardForMainPageBodyMenu: React.FC<CardForMainPageBodyMenuProps> = ({ id, title, description, bgColor }) => {
    return (
        <section id={id} className="py-12 w-full md:w-1/3 px-4">
            <Card className={`rounded-lg shadow-md ${bgColor} text-white`}>
                <CardHeader>
                    <h2 className="text-3xl font-bold mb-6">{title}</h2>
                </CardHeader>
                <CardContent>
                    {description.map((desc, index) => (
                        <p key={index} className="text-lg mb-2">{desc}</p>
                    ))}
                </CardContent>
            </Card>
        </section>
    );
};

export default CardForMainPageBodyMenu;
