"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuItemType } from '@/constants/menu.type';

interface RecursiveMenuProps {
    items: MenuItemType[];
}

const RecursiveMenu: React.FC<RecursiveMenuProps> = ({ items }) => {
    return (
        <nav className="flex justify-center gap-10 items-center w-full">
            {items.map((item) => (
                <MenuItemComponent key={item.key} item={item} />
            ))}
        </nav>
    );
};

const MenuItemComponent: React.FC<{ item: MenuItemType }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    const commonClasses = "px-4 py-2 text-base font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-600 focus:ring-white transition duration-150 ease-in-out";

    if (item.items) {
        return (
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger className={commonClasses}>
                    {item.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-purple-800 rounded-md shadow-lg">
                    {item.items.map((subItem) => (
                        <DropdownMenuItem key={subItem.key}>
                            <Link href={`/${item.key}/${subItem.key}`} className="block px-4 py-2 hover:bg-purple-100 w-full text-left">
                                {subItem.name}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <Link href={`/${item.key}`} className={commonClasses}>
            {item.name}
        </Link>
    );
};

export default RecursiveMenu;